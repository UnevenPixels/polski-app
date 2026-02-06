import { isSyncEnabled, saveToCloud, saveVocabularyToCloud } from './firebase.js';

const DB_NAME = 'polski-db';
const DB_VERSION = 1;

const STORES = {
  progress: 'progress',
  vocabulary: 'vocabulary',
  settings: 'settings'
};

let db = null;
let syncTimeout = null;

export async function initDB() {
  if (db) return db;

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      if (!database.objectStoreNames.contains(STORES.progress)) {
        database.createObjectStore(STORES.progress, { keyPath: 'id' });
      }

      if (!database.objectStoreNames.contains(STORES.vocabulary)) {
        const vocabStore = database.createObjectStore(STORES.vocabulary, { keyPath: 'word' });
        vocabStore.createIndex('nextReview', 'nextReview', { unique: false });
        vocabStore.createIndex('lesson', 'lesson', { unique: false });
      }

      if (!database.objectStoreNames.contains(STORES.settings)) {
        database.createObjectStore(STORES.settings, { keyPath: 'key' });
      }
    };
  });
}

async function getStore(storeName, mode = 'readonly') {
  if (!db) await initDB();
  const tx = db.transaction(storeName, mode);
  return tx.objectStore(storeName);
}

export async function get(storeName, key) {
  const store = await getStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function set(storeName, value) {
  const store = await getStore(storeName, 'readwrite');
  return new Promise((resolve, reject) => {
    const request = store.put(value);
    request.onsuccess = () => {
      resolve(request.result);
      // Trigger cloud sync after local save (debounced)
      if (isSyncEnabled()) {
        schedulCloudSync(storeName, value);
      }
    };
    request.onerror = () => reject(request.error);
  });
}

// Debounced cloud sync to avoid too many writes
function schedulCloudSync(storeName, value) {
  if (syncTimeout) clearTimeout(syncTimeout);
  
  syncTimeout = setTimeout(async () => {
    try {
      if (storeName === STORES.progress) {
        await saveToCloud(value);
      }
    } catch (error) {
      console.warn('Background sync failed:', error);
    }
  }, 2000); // Wait 2 seconds before syncing
}

export async function getAll(storeName) {
  const store = await getStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getAllByIndex(storeName, indexName, query) {
  const store = await getStore(storeName);
  const index = store.index(indexName);
  return new Promise((resolve, reject) => {
    const request = index.getAll(query);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function remove(storeName, key) {
  const store = await getStore(storeName, 'readwrite');
  return new Promise((resolve, reject) => {
    const request = store.delete(key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function clear(storeName) {
  const store = await getStore(storeName, 'readwrite');
  return new Promise((resolve, reject) => {
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function count(storeName) {
  const store = await getStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.count();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getDueVocabulary(limit = 20) {
  const store = await getStore(STORES.vocabulary);
  const index = store.index('nextReview');
  const now = new Date().toISOString();
  const range = IDBKeyRange.upperBound(now);
  
  return new Promise((resolve, reject) => {
    const results = [];
    const request = index.openCursor(range);
    
    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor && results.length < limit) {
        results.push(cursor.value);
        cursor.continue();
      } else {
        resolve(results);
      }
    };
    request.onerror = () => reject(request.error);
  });
}

export { STORES };
