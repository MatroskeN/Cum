$( document ).ready(function() {
  var swiper = new Swiper('.about_container', {
    slidesPerView: '1',
    navigation: {
      nextEl: '.next_about',
      prevEl: '.prev_about',
    },
  });
  var swiper1 = new Swiper('.manafacture_swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    navigation: {
      nextEl: '.next_arrow',
      prevEl: '.prev_arrow',
    },
    breakpoints:{
      426: {
        slidesPerView: '2',
      },
    }
  });
  let bg = document.querySelector('.mouse-parallax-bg');
  window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 30 + 'px)';
});
// //mouse-parallax-bg-sea
let bg1 = document.querySelector('.mouse-parallax-bg-sea');
  window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg1.style.transform = 'translate(-' + x * 10 + 'px)';
});
// //mouse-parallax-bg-rock
// let bg2 = document.querySelector('.mouse-parallax-bg-rock');
//   window.addEventListener('mousemove', function(e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;  
//     bg2.style.transform = 'translate(-' + x * 10 + 'px)';
// });

$('.lang_button').on("click", function () {
  $('.fade_up_panel').css({'opacity':'1'});
});
$('.first_lang').on("click", function () {
  $('.lang_data').html('Ru');
  $('.fade_up_panel').css({'opacity':'0'});
});
$('.second_lang').on("click", function () {
  $('.lang_data').html('Eng');
  $('.fade_up_panel').css({'opacity':'0'});
});


//headerscroll
var scroll = 0;
    
$(window).on("scroll", function(){
    scroll = window.pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);
    if ((scroll + 120) > $(".banner").height()) { // высота банера
        console.log('height')
        $('#head').addClass("scroll-header");
    }
    if ((scroll + 120) < $(".banner").height()){
        $('#head').removeClass("scroll-header");
    }
});


});