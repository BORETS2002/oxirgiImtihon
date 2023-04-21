const Youtube = "Youtube"; // cash key
const assets = [
  "/",
  "/imtihon/public/index.html",
  "/imtihon/src/App.css",
  "/imtihon/src/index.css",
  "/imtihon/src/index.js",
]; // cash assets

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    Caches.open(Youtube).then((Cache) => {
      caches.addAll(assets);
    }),
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.event);
    }),
  );
});
