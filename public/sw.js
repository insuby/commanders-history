const CACHE_NAME = 'commanders-history-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/index-LZ1grUd2.css',
  '/static/index-ROxGXO0P.js',
  '/static/react-S4pArkPf.js',
  '/favicon.ico',
  '/medals/order_october_revolution.png',
  '/medals/order_red_banner.png',
  '/medals/order_patriotic_war.png',
  '/medals/order_labor_red_banner.png',
  '/medals/order_red_banner_2.png',
  '/medals/order_service_homeland.png',
  '/images/Abolins_V_J.jpg',
  '/images/UpzIK67vSH0.jpg',
  '/images/73211.jpg'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Перехват запросов
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Возвращаем кэшированный ответ, если он есть
        if (response) {
          return response;
        }
        
        // Иначе делаем сетевой запрос
        return fetch(event.request).then((response) => {
          // Проверяем, что ответ валидный
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Клонируем ответ
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
}); 