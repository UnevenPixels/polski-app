// Polski PWA Service Worker
// Strategy:
// - Core app shell: cache-first (instant load, never stale)
// - HTML: network-first with cache fallback (for updates)
// - External CDN (Firebase): network-first with cache fallback (works offline after first load)
// - Everything else: stale-while-revalidate

const CACHE_VERSION = 'v15';
const STATIC_CACHE = `polski-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `polski-runtime-${CACHE_VERSION}`;
const CDN_CACHE = `polski-cdn-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/router.js',
  './js/core/storage.js',
  './js/core/progress.js',
  './js/core/srs.js',
  './js/core/firebase.js',
  './js/core/sync.js',
  './js/core/sync-queue.js',
  './js/core/tts.js',
  './js/core/reminders.js',
  './js/data/lessons.js',
  './js/data/vocabulary.js',
  './js/data/sounds.js',
  './js/data/grammar.js',
  './js/data/listening.js',
  './js/data/scenarios.js',
  './js/data/drills.js',
  './js/data/frequency-vocab.js',
  './js/data/lesson-extras.js',
  './js/data/verbs.js',
  './js/views/home.js',
  './js/views/lessons.js',
  './js/views/lesson.js',
  './js/views/review.js',
  './js/views/reference.js',
  './js/views/settings.js',
  './js/views/stats.js',
  './js/views/sounds.js',
  './js/views/listening.js',
  './js/views/scenarios.js',
  './js/views/drills.js',
  './js/views/practice.js',
  './js/views/verbs.js',
  './js/exercises/base.js',
  './firebase-config.js',
  './manifest.json',
  './assets/favicon.svg',
  './assets/icons/icon-192.png'
];

// CDN URLs we care about (Firebase SDK)
const CDN_HOSTS = [
  'www.gstatic.com',
  'firebasestorage.googleapis.com',
  'firebaseinstallations.googleapis.com',
  'identitytoolkit.googleapis.com',
  'securetoken.googleapis.com'
];

// Install: precache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => 
            !key.includes(CACHE_VERSION) && 
            (key.startsWith('polski-'))
          )
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch handler with strategy by request type
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http
  if (!request.url.startsWith('http')) return;
  
  const url = new URL(request.url);
  
  // Strategy: navigation/HTML requests - network first, cache fallback
  if (request.mode === 'navigate' || 
      (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(request, STATIC_CACHE, './index.html'));
    return;
  }
  
  // Strategy: CDN/external - network first, cache fallback
  if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(networkFirst(request, CDN_CACHE));
    return;
  }
  
  // Strategy: same-origin static - cache first (instant load)
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }
  
  // Default: stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
});

// Cache-first strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  
  try {
    const response = await fetch(request);
    if (response.ok && response.type === 'basic') {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // Last resort: return cached index.html for navigation
    const fallback = await cache.match('./index.html');
    if (fallback) return fallback;
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

// Network-first with cache fallback
async function networkFirst(request, cacheName, fallbackUrl) {
  const cache = await caches.open(cacheName);
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    
    if (fallbackUrl) {
      const fallback = await caches.match(fallbackUrl);
      if (fallback) return fallback;
    }
    
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

// Stale-while-revalidate
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  
  return cached || fetchPromise || new Response('Offline', { status: 503 });
}

// Background Sync: triggered by browser when online
self.addEventListener('sync', (event) => {
  if (event.tag === 'drain-queue') {
    event.waitUntil(notifyClientsToDrain());
  }
});

async function notifyClientsToDrain() {
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  clients.forEach(client => {
    client.postMessage({ type: 'drain-queue' });
  });
}

// Allow manual cache clear from app
self.addEventListener('message', (event) => {
  if (event.data?.type === 'skip-waiting') {
    self.skipWaiting();
  }
  if (event.data?.type === 'clear-cache') {
    event.waitUntil(
      caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
    );
  }
});
