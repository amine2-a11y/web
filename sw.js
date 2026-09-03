const CACHE_NAME='amine-ps4-offline-v1';
const CORE=['./','./index.html','./css/style.css','./js/app.js','./assets/ps4-gold-bg.png','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{let c=res.clone();caches.open(CACHE_NAME).then(x=>x.put(e.request,c));return res}).catch(()=>caches.match('./index.html'))))});
