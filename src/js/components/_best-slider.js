const bestSlider = new Swiper(".best__slider", {
   // Optional parameters
   loop: false,
   speed: 500,
   initialSlide: 2,
   slidesPerView: 5,
   // spaceBetween: 30,
   centeredSlides: true,
   wrapperClass: "best__slider-wrapper",
   slideClass: "best__slide",
   slideActiveClass: "best__slide--active",
   slideNextClass: "best__slide-next",
   slidePrevClass: "best__slide-prev",
   slideVisibleClass: "best__slide--visible",
   pagination: {
      el: ".best__slider-pagination",
      type: "bullets",
      clickable: true,
   },

   breakpoints: {
      1024: {
         slidesPerView: 4,
         activeIndex: 3,
      },
      768: {
         slidesPerView: 3,
         activeIndex: 2,
      },
      480: {
         slidesPerView: 2,
         activeIndex: 2,
      },
      0: {
         slidesPerView: 1,
         activeIndex: 1,
      },
   },
});
