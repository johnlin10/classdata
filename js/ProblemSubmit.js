const btn = document.getElementById('button');

function problemAgan(){
    btn.value = '傳送';
}

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = '傳送中...';

    const serviceID = 'default_service';
    const templateID = 'template_j81x4hm';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = '已傳送';
        document.getElementById("form").reset();
        alert("我們已收到你的訊息！")
      }, (err) => {
        btn.value = '重新傳送';
        alert(JSON.stringify(err));
      });
  });