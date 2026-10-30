self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil(caches.delete('thienmupagoda-v1').then(()=>self.registration.unregister()).then(()=>self.clients.claim())));
