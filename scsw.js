const window = self;
const urlToOpen = new URL('/', self.location.origin).href;
self.importScripts("/js/cdn/gun.js", "/js/cdn/sea.js")
var CACHE_NAME = 'cachee';
var urlsToCache = []
var devices={}
var gun_user = undefined
const channel = new BroadcastChannel('sw-messages');
channel.postMessage({title: 'Hello from SW'})
channel.addEventListener('message',(event)=>{
  console.log('sw message (sw-messages channel)')
  console.log(event);})
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
          console.log('me = v0001');
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
  /* 
  base64url encode-> qr
  qr->base64url decode-> json->cache ->link
  */
  self.addEventListener('fetch', (event) => {
    // If a match isn't found in the cache, the response
    // will look like a connection error
    console.log("event.request: ")
    console.log(event.request)
    console.log("Caches: ")
    console.log(caches)
    // console.log("url: "+urlToOpen)
    if(event.request.url==self.location.origin+"/your_cache.html"){
          console.log("inside if statement in sw fetching cache")
      event.respondWith(caches.match(event.request));
      // event.respondWith(new Response(`<p>generated response</p>`));//, {
        // headers: {
      //   url: self.location.origin+'/your_cache.html', 
      //   status: 200,
      //   headers: {
      //     'Content-Type': 'text/html'}
      // }));
    }
    else{console.log("inside if statement. not matches")
    console.log(event.request.url)
    console.log(self.location.origin+"/your_cache.html")

  }
    // event.respondWith(caches.match(event.request));
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