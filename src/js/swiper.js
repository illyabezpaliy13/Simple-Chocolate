new Swiper('.reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyinViewport: true,
  },
  // mousewheel: {
  //   sensitivity: 2,
  //   eventsTarget: '.reviews__slider',
  // },

  //   loop: true,
  // loopedSlides: 3
  freeMode: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableonInteraction: true,
  },
  speed: 750,
  // effect: 'coverflow'
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3.3,
      spaceBetween: 28,
    },
  },
});

new Swiper('.products__slider', {
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
  },
  grabCursor: true,
  // slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyinViewport: true,
  },
  // mousewheel: {
  //   sensitivity: 2,
  //   eventsTarget: '.reviews__slider',
  // },
  freeMode: true,
  simulateTouch: false,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableonInteraction: true,
  },
  speed: 750,
  // effect: 'coverflow'
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3.8,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

new Swiper('.buy-now__slider', {
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
  },
  grabCursor: true,
  // slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyinViewport: true,
  },
  // mousewheel: {
  //   sensitivity: 2,
  //   eventsTarget: '.reviews__slider',
  // },
  freeMode: true,
  simulateTouch: false,
  // initialSlide: 0,
  // autoplay: {
  //   delay: 2000,
  //   stopOnLastSlide: false,
  //   disableonInteraction: true,
  // },
  // speed: 750,
  // effect: 'coverflow'
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    // 768: {
    //   slidesPerView: 3,
    //   spaceBetween: 18,
    // },
    // 1200: {
    //   slidesPerView: 4,
    //   spaceBetween: 18,
    // },
  },
});