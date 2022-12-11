// 注冊 Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('Service Worker 註冊成功');
      })
      .catch(function(err) {
        console.log('Service Worker 註冊失敗：', err);
      });
  }
  
  // 定義 Service Worker 腳本
  self.addEventListener('install', function(event) {
    console.log('Service Worker 安裝成功');
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Service Worker 攔截網絡請求：', event.request.url);
  });
  