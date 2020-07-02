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
        fetch(e.request)
            .then(async response => {
                if(e.request.method == "GET"){
                    caches.open('mi-cache').then(cache=>cache.add(e.request)).catch(console.error);
                }
                if(!response) throw response;
                return response;
            })
            .catch(() =>{
                caches.match(e.request);
            })
    );
});