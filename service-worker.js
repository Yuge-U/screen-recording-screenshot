// Version 1.8.2: offline caching disabled so the app always loads the latest files.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>{
event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key)))).then(()=>self.registration.unregister()).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",()=>{});
