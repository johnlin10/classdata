// 確認並安裝 Service Worker
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/classdata/service-worker.js");
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};
registerServiceWorker();

// 推播通知
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
//     .then(reg => {
//       if ('Notification' in window) {
//         Notification.requestPermission(function (status) {
//           console.log('Notification permission status:', status);
//           // displayNotification();
//         });
//       }

//       console.log('[Service Worker] register end');
//     }).catch(error => {
//     });
// }
// function displayNotification() {
//   if (Notification.permission == 'granted') {
//     navigator.serviceWorker.getRegistration().then(reg => {
//       var options = {
//         icon: '/school.png',
//         body: '通知推播成功',
//         image: '/school.png'
//       };
//       reg.showNotification('班級資訊平台', options);
//       console.log('displayNotification');
//     });
//   }
// }