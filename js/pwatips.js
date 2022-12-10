let deferredPrompt;
const addBtn = document.querySelector(".addBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  // 2. 停用 Chrome 67 前的公版提示視窗
  e.preventDefault();
  // 3. 記得把事件存起來，後續在安裝的流程上會需要
  deferredPrompt = e;
  // 4. 讓 "安裝按鈕" 顯示
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // 5. 點選後 "安裝按鈕" 隱藏 (也可以停用)
    addBtn.style.display = "none";
    // 6. 點選按鈕後才觸發提示視窗
    deferredPrompt.prompt();
    // 7. 等待使用者確認或拒絕
    deferredPrompt.userChoice.then((choiceResult) => {
      // 8. 從 userChoice 的結果判斷是否安裝成功
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      // 9. 用過就不能再用了
      deferredPrompt = null;
    });
  });
});