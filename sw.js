const CACHE_NAME = 'restaurant-pwa-v1';

// Install event
self.addEventListener('install', event => {
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    clients.claim();
});

// Fetch event (Network First, so your Excel updates show immediately)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
