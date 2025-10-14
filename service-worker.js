const CACHE_NAME = "accident-app-cache-v1";
const urlsToCache = [
  "index.html",
  "about.html",
  "crashes.html",
  "crash_detail.html",
  "result.html",
  "result_detail.html",
  "step1.html",
  "step2.html",
  "step3.html",
  "step4.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});
