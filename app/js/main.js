$( document ).ready(function() {
  var swiper = new Swiper('.about_container', {
    slidesPerView: '1',
  });
  var swiper1 = new Swiper('.manafacture_swiper', {
    slidesPerView: '2',
    speed: 1000,
    navigation: {
      nextEl: '.next_arrow',
      prevEl: '.prev_arrow',
    },
  });
});