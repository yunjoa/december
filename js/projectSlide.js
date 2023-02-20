new Swiper(".swiper-container", {
  slidesPerView: 4,
  // initialSlide: 2,
  speed: 500,
  // 마진 사용하면 안 먹을 수 있음
  spaceBetween: 32,
  loop: true,
  centeredSlides: true,
  roundLengths: true,
  mousewheel: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      // centeredSlides: false,
      // spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
  },
});
