const CACHE_NAME = 'polski-v5';
const ASSETS = [
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
  './js/core/tts.js',
  './js/data/lessons.js',
  './js/data/vocabulary.js',
  './js/data/sounds.js',
  './js/data/grammar.js',
  './js/views/home.js',
  './js/views/lessons.js',
  './js/views/lesson.js',
  './js/views/review.js',
  './js/views/reference.js',
  './js/views/settings.js',
  './js/exercises/base.js',
  './firebase-config.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        if (response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      if (event.request.destination === 'document') {
        return caches.match('./index.html');
      }
    })
  );
});
