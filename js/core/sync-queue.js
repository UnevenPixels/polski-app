// Offline-first sync queue
// All cloud writes go through this queue, which persists to IndexedDB
// Pending writes are replayed when network becomes available

const QUEUE_DB = 'polski-sync-queue';
const QUEUE_STORE = 'queue';
const META_STORE = 'meta';

let queueDb = null;
let isDraining = false;
let drainTimer = null;
let listeners = new Set();

async function openQueueDb() {
  if (queueDb) return queueDb;
  
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(QUEUE_DB, 1);
    
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      queueDb = req.result;
      resolve(queueDb);
    };
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(QUEUE_STORE)) {
        db.createObjectStore(QUEUE_STORE, { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(META_STORE)) {
        db.createObjectStore(META_STORE, { keyPath: 'key' });
      }
    };
  });
}

// Add an operation to the queue
// Operations of the same type are coalesced (only latest is kept)
export async function enqueue(operation) {
  const db = await openQueueDb();
  
  return new Promise((resolve, reject) => {
    const tx = db.transaction(QUEUE_STORE, 'readwrite');
    const store = tx.objectStore(QUEUE_STORE);
    
    // Coalesce: remove existing operations of the same type
    if (operation.coalesceKey) {
      const cursorReq = store.openCursor();
      cursorReq.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          if (cursor.value.coalesceKey === operation.coalesceKey) {
            cursor.delete();
          }
          cursor.continue();
        } else {
          // After cleanup, add new operation
          const addReq = store.add({
            ...operation,
            timestamp: Date.now(),
            attempts: 0
          });
          addReq.onsuccess = () => {
            notifyListeners();
            tryDrain();
            resolve(addReq.result);
          };
          addReq.onerror = () => reject(addReq.error);
        }
      };
      cursorReq.onerror = () => reject(cursorReq.error);
    } else {
      const addReq = store.add({
        ...operation,
        timestamp: Date.now(),
        attempts: 0
      });
      addReq.onsuccess = () => {
        notifyListeners();
        tryDrain();
        resolve(addReq.result);
      };
      addReq.onerror = () => reject(addReq.error);
    }
  });
}

export async function getQueueSize() {
  const db = await openQueueDb();
  return new Promise((resolve) => {
    const tx = db.transaction(QUEUE_STORE, 'readonly');
    const req = tx.objectStore(QUEUE_STORE).count();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(0);
  });
}

async function getAllOperations() {
  const db = await openQueueDb();
  return new Promise((resolve) => {
    const tx = db.transaction(QUEUE_STORE, 'readonly');
    const req = tx.objectStore(QUEUE_STORE).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

async function removeOperation(id) {
  const db = await openQueueDb();
  return new Promise((resolve) => {
    const tx = db.transaction(QUEUE_STORE, 'readwrite');
    const req = tx.objectStore(QUEUE_STORE).delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => resolve();
  });
}

async function incrementAttempts(id) {
  const db = await openQueueDb();
  return new Promise((resolve) => {
    const tx = db.transaction(QUEUE_STORE, 'readwrite');
    const store = tx.objectStore(QUEUE_STORE);
    const getReq = store.get(id);
    getReq.onsuccess = () => {
      const op = getReq.result;
      if (op) {
        op.attempts = (op.attempts || 0) + 1;
        op.lastAttempt = Date.now();
        store.put(op);
      }
      resolve();
    };
    getReq.onerror = () => resolve();
  });
}

// Try to drain the queue - safe to call frequently
async function tryDrain() {
  if (isDraining) return;
  if (!navigator.onLine) return;
  
  // Clear any pending timer
  if (drainTimer) {
    clearTimeout(drainTimer);
    drainTimer = null;
  }
  
  isDraining = true;
  notifyListeners();
  
  try {
    // Lazy import to avoid circular deps and to handle if firebase isn't ready
    const { isSyncEnabled, saveToCloud, saveVocabularyToCloud } = await import('./firebase.js');
    
    if (!isSyncEnabled()) {
      isDraining = false;
      notifyListeners();
      return;
    }
    
    const operations = await getAllOperations();
    
    for (const op of operations) {
      try {
        let success = false;
        
        if (op.type === 'progress') {
          success = await saveToCloud(op.payload);
        } else if (op.type === 'vocabulary') {
          success = await saveVocabularyToCloud(op.payload);
        }
        
        if (success) {
          await removeOperation(op.id);
        } else {
          await incrementAttempts(op.id);
          // After many attempts, drop it
          if (op.attempts >= 10) {
            console.warn('Dropping operation after 10 failed attempts:', op);
            await removeOperation(op.id);
          }
          break; // Stop on failure to avoid hammering
        }
      } catch (err) {
        console.warn('Sync queue operation failed:', err);
        await incrementAttempts(op.id);
        break;
      }
    }
    
    // If still items left, schedule retry with backoff
    const remaining = await getQueueSize();
    if (remaining > 0 && navigator.onLine) {
      drainTimer = setTimeout(() => tryDrain(), 30000); // retry in 30s
    }
  } catch (err) {
    console.warn('Drain failed:', err);
  } finally {
    isDraining = false;
    notifyListeners();
  }
}

// Public API: trigger drain manually (e.g. when online event fires)
export async function drainQueue() {
  return tryDrain();
}

// Subscribe to queue size changes (for UI indicators)
export function onQueueChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

async function notifyListeners() {
  const size = await getQueueSize();
  listeners.forEach(cb => {
    try { cb({ size, isDraining, online: navigator.onLine }); } catch (e) {}
  });
}

export function getStatus() {
  return { isDraining, online: navigator.onLine };
}

// Initialize: register online/offline handlers
export function initSyncQueue() {
  window.addEventListener('online', () => {
    console.log('Back online - draining sync queue');
    notifyListeners();
    tryDrain();
  });
  
  window.addEventListener('offline', () => {
    console.log('Went offline - queueing operations');
    notifyListeners();
  });
  
  // Try to drain on startup
  if (navigator.onLine) {
    setTimeout(() => tryDrain(), 2000);
  }
  
  // Register Background Sync if supported
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then(reg => {
      // Background sync allows the SW to wake up and trigger sync when online
      reg.sync.register('drain-queue').catch(() => {});
    }).catch(() => {});
  }
  
  // Listen for messages from service worker (when bg sync fires)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data?.type === 'drain-queue') {
        tryDrain();
      }
    });
  }
}
