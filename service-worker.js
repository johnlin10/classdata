// 檢查餅刪除舊快取
const deleteCache = async (key) => {
  await caches.delete(key);
};
const deleteOldCaches = async () => {
  const cacheKeepList = ["v4.11.1.9"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

// 通過版本控制更新
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v4.11.1.9");
  await cache.addAll(resources);
};
const putInCache = async (request, response) => {
  const cache = await caches.open("v4.11.1.9");
  await cache.put(request, response);
};

// 啟動 Service Worker
const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("使用預載響應", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response("發生網絡錯誤", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// 導航預載
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};
self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: "/classdata/school.png",
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});

// 刪除舊快取
self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches());
});

// 安裝資源
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    addResourcesToCache([
      "/classdata/mobile.html",
      "/classdata/manifest.json",
      "/classdata/js/scripts.js",
      "/classdata/js/FastGo.js",
      "/classdata/mobile_css/styles.css",
      "/classdata/post_mobile.html",
      "/classdata/資料庫_mobile.html",
      "/classdata/log_mobile.html",
      "/classdata/Post/PWA.html",
      "/classdata/課程表_mobile.html",
      "/classdata/考程表_mobile.html",
      "/classdata/啦啦隊比賽_mobile.html",
      "/classdata/ReportProblem.html",
      "/classdata/Karnaugh%20Map%20Builder%20and%20Solver.html",
      "/classdata/Karnaugh%20Map%20Builder%20and%20Solver_files/app.js",
      "/classdata/Karnaugh%20Map%20Builder%20and%20Solver_files/equation.js",
      "/classdata/Karnaugh%20Map%20Builder%20and%20Solver_files/style.css",

      // "/mobile.html",
      // "/manifest.json",
      // "/js/scripts.js",
      // "/js/FastGo.js",
      // "/mobile_css/styles.css",
      // "/post_mobile.html",
      // "/資料庫_mobile.html",
      // "/log_mobile.html",
      // "/Post/PWA.html",
      // "/課程表_mobile.html",
      // "/考程表_mobile.html",
      // "/啦啦隊比賽_mobile.html",
      // "/ReportProblem.html",
      // "/Karnaugh%20Map%20Builder%20and%20Solver.html",
      // "/Karnaugh%20Map%20Builder%20and%20Solver_files/app.js",
      // "/Karnaugh%20Map%20Builder%20and%20Solver_files/equation.js",
      // "/Karnaugh%20Map%20Builder%20and%20Solver_files/style.css",
    ])
  );
});

