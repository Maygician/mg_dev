window.require = require;
// self.importScripts("/js/cdn/gun.js", "/js/cdn/sea.js")
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = []
// var urlsToCache = [
//   '/',
//   '/styles/main.css',
//   '/script/main.js'
// ];
//#region install
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
  /*self.addEventListener('install', (event) => {
    event.waitUntil(async function() {
      const cache = await caches.open('mygame-core-v1');
      cache.addAll(
        // levels 11-20
      );
      await cache.addAll(
        // core assets & levels 1-10
      );
    }());
  });*/
  //#endregion
  self.addEventListener('activate', (event) => {
    event.waitUntil(async function() {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.filter((cacheName) => {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          if(cacheName=="toDelete")
          console.log('cache deleted')
          return true;
        }).map(cacheName => caches.delete(cacheName))
      );
    }());
  });
//#region push
self.addEventListener('push', (event) => {
  // if (event.data.text() == 'new-email') {
  //   event.waitUntil(async function() {
  //     const cache = await caches.open('mysite-dynamic');
  //     const response = await fetch('/inbox.json');
  //     await cache.put('/inbox.json', response.clone());
  //     const emails = await response.json();
  //     registration.showNotification("New email", {
  //       body: "From " + emails[0].from.name,
  //       tag: "new-email"
  //     });
  //   }());
  // }
  console.log(event.data.text());
  registration.showNotification("New email", {body: "Body", tag: "tag"})
});

self.addEventListener('notificationclick', function(event) {
  if (event.notification.tag == 'new-email') {
    // Assume that all of the resources needed to render
    // /inbox/ have previously been cached, e.g. as part
    // of the install handler.
    new WindowClient('/inbox/');
  }
});
//#region 