// Minimal service worker so Chrome offers "Install app". It does not cache sales data.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
