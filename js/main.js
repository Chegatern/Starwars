var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow-right',
    prevEl: '.arrow-left',
  },
  loop: true,
  breakpoints: {
    1140: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  }
});