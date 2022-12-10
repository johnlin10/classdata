/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

setTimeout(() => {
    $(".loading-div").hide(duration=400);
    $('body').css('overflow-y','scroll');
},700); 


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
