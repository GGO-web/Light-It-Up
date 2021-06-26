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
      bulletClass: "best__slider-pagination-bullet",
      bulletActiveClass: "best__slider-pagination-bullet--active",
      clickable: true,
      renderBullet: function (index, className) {
         return (
            '<button aria-label="Go to slide ' +
            (index + 1) +
            '" class="' +
            className +
            ' btn-reset"></button>'
         );
      },
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
         autoHeight: false,
      },
      0: {
         autoHeight: true,
         slidesPerView: 1,
         activeIndex: 1,
      },
   },
});
