$( document ).ready(function() {
  var swiper = new Swiper('.about_container', {
    slidesPerView: '1',
    navigation: {
      nextEl: '.next_about',
      prevEl: '.prev_about',
    },
  });
  var swiper1 = new Swiper('.manafacture_swiper', {
    slidesPerView: '1',
    speed: 1500,
    loop:true,
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
    bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 5 + 'px)';
});
// //mouse-parallax-bg-sea
let bg1 = document.querySelector('.mouse-parallax-bg-sea');
  window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg1.style.transform = 'translate(-' + x * 10 + 'px' + y * 5 + 'px)';
});
// //mouse-parallax-bg-mountain
let bg2 = document.querySelector('.mouse-parallax-bg-mountain');
  window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg2.style.transform = 'translate(' + x * 10 + 'px, -' + y * 5 + 'px)';
});

//lang panel
let lang_counter = 1;
$('.lang_button').on("click", function () {
  if (lang_counter == 1){
    $('.fade_up_panel').css({'opacity':'1'});
    lang_counter*=-1;
  } else {
    $('.fade_up_panel').css({'opacity':'0'});
    lang_counter*=-1;
  }
});
$('.first_lang').on("click", function () {
  $('.lang_data').html('Ru');
  $('.fade_up_panel').css({'opacity':'0'});
});
$('.second_lang').on("click", function () {
  $('.lang_data').html('Eng');
  $('.fade_up_panel').css({'opacity':'0'});
});

$('.burger').on("click",function(){
  $('#head').addClass("opened");
  $(this).hide();
  $('.xclose').show();
})
$('.xclose').on("click",function(){
  $('#head').removeClass("opened");
  $(this).hide();
  $('.burger').show();
})


//headerscroll
var scroll = 0;
    
$(window).on("scroll", function(){
    scroll = window.pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);
    if ((scroll + 120) > 150) { // высота банера
        $('#head').addClass("scroll-header");
    }
    if ((scroll + 120) < 150){
        $('#head').removeClass("scroll-header");
    }
});

//anchor
$('.anchor a').on('click', function() {
    
  $('html, body').animate({
      scrollTop: $('#anchor').offset().top
  }, {
      duration: 370,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
  });

  return false;
});
});