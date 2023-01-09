// 檢查餅刪除舊快取
const deleteCache = async (key) => {
  await caches.delete(key);
};
const deleteOldCaches = async () => {
  const cacheKeepList = ["v4.12.3.13"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

// 通過版本控制更新
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v4.12.3.13");
  await cache.addAll(resources);
};
const putInCache = async (request, response) => {
  const cache = await caches.open("v4.12.3.13");
  await cache.put(request, response);
};

self.addEventListener("fetch", (event) => {
  // 在這裡檢查 service worker 是否已經更新
  if (isNewServiceWorker()) {
    event.respondWith(
      // 如果是新的 service worker，則重新整理網頁
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      })
    );
  } else {
    // 如果不是新的 service worker，則繼續正常處理請求
    event.respondWith(
      fetch(event.request)
    );
  }
});



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

// 預載
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
      fallbackUrl: "/school.png",
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});

// 刪除舊快取
self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches());
  location.reload();
});

// 安裝資源
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    addResourcesToCache([
      "mobile.html",
      "manifest.json",
      "js/scripts.js",
      "js/FastGo.js",
      "mobile_css/styles.css",
      "pages/POST.html",
      "pages/FOLDER.html",
      "pages/LOG.html",
      "pages/HappyNewYear.html",
      "Post/PWA.html",
      "pages/CourseSchedule.html",
      "pages/ExaminationSchedule.html",
      "pages/CheerleaderCompetition.html",
      "ReportProblem.html",
      "pages/Karnaugh Map Builder and Solver.html",
      "Karnaugh Map Builder and Solver_files/app.js",
      "Karnaugh Map Builder and Solver_files/equation.js",
      "Karnaugh Map Builder and Solver_files/style.css",
    ])
  );
});

