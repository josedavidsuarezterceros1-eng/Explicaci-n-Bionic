const CACHE_NAME = 'bionic-presenter-cache-v1';

// Recursos críticos para precargar apenas se abre la página
const PRECACHE_URLS = [
  './',
  './index.html',
  './_test_widget.js',
  './new_slides.json',
  './scratch.json',
  './img/image2.png',
  './img/image22.png',
  './img/bg_requisitos.png',
  './img/image2_test.png'
];

// Instalación: Precargamos archivos base
self.addEventListener('install', event => {
  self.skipWaiting(); // Activar el SW inmediatamente
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .catch(err => console.log('Error precaching', err))
  );
});

// Activación: Limpiamos cachés antiguos si los hubiera
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar peticiones (Fetch): Cache First (Primero en Caché, sino busca en red)
self.addEventListener('fetch', event => {
  // Solo manejamos peticiones GET
  if (event.request.method !== 'GET') return;
  
  // Extensiones de Chrome y peticiones externas raras no las cacheamos
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // 1. Si está en caché (imágenes, video, scripts locales), lo devolvemos al instante
      if (cachedResponse) {
        return cachedResponse;
      }

      // 2. Si no está en caché, lo pedimos a internet
      return fetch(event.request).then(networkResponse => {
        // Validamos que sea una respuesta correcta (código 200) o respuesta opaca (código 0)
        // Para videos (206 Partial Content) también lo dejamos pasar.
        if (!networkResponse || (networkResponse.status !== 200 && networkResponse.status !== 0 && networkResponse.status !== 206)) {
          return networkResponse;
        }

        // 3. Clonamos la respuesta y la guardamos en el caché para la próxima vez
        // Solo guardamos si NO es 206 (Range requests de video pueden ser complicados de cachear enteros manualmente,
        // pero Safari/Chrome manejan el caché de media automáticamente si devolvemos el stream o si lo guardamos).
        if (networkResponse.status === 200 || networkResponse.status === 0) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }

        return networkResponse;
      }).catch(err => {
        console.error('Fetch falló y no hay caché:', err);
        // Aquí podríamos devolver una imagen por defecto si estuviéramos offline
      });
    })
  );
});
