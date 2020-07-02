console.log("Logging Service Worker");
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('mi-cache').then(function (cache) {
            return cache.addAll([
                './',
                './index.html',
                './index.js',
                './style.css',
            ]);
        })
    );
});

caches.open('mi-cache').then(function (cache) {
    return cache.addAll([
        './',
        './index.html',
        './index.js',
        './style.css',
    ])
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});