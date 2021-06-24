const reviewsSlider = new Swiper(".reviews__slider", {
   // Optional parameters
   loop: false,
   speed: 500,
   slidesPerView: 1,
   spaceBetween: 20,
   wrapperClass: "reviews__slider-wrapper",
   slideClass: "reviews__slide",
   slideActiveClass: "reviews__slide--active",
   slideNextClass: "reviews__slide-next",
   slidePrevClass: "reviews__slide-prev",
   slideVisibleClass: "reviews__slide--visible",

   navigation: {
      nextEl: ".reviews__slider-button-next",
      prevEl: ".reviews__slider-button-prev",
      disabledClass: "reviews__slider-button-disabled",
   },
});
