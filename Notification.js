// 推播通知
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        if ('Notification' in window) {
          Notification.requestPermission(function (status) {
            console.log('Notification permission status:', status);
            displayNotification();
          });
        }
  
        console.log('[Service Worker] register end');
      }).catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }
  
  function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        if (reg) {
          // 在這裡使用 reg 變數
          var options = {
            icon: '/school.png',
            body: '通知推播測試',
            image: '/school.png'
          };
          reg.showNotification('班級資訊平台', options);
          console.log('displayNotification');
        } else {
          console.error('Service worker registration is not found');
        }
      });
    }
  }
  

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
//     .then(reg => {
//       if ('Notification' in window) {
//         Notification.requestPermission(function (status) {
//           console.log('Notification permission status:', status);
//           displayNotification();
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
//         body: '通知推播測試',
//         image: '/school.png'
//       };
//       reg.showNotification('班級資訊平台', options);
//       console.log('displayNotification');
//     });
//   }
// }