const salesSlider = new Swiper(".sales__slider", {
   // Optional parameters
   loop: false,
   speed: 500,
   slidesPerView: 3,
   spaceBetween: 30,
   autoplay: {
      delay: 3000,
   },
   disableOnInteraction: true,
   simulateTouch: false,
   wrapperClass: "sales__slider-wrapper",
   slideClass: "sales__slide",
   slideActiveClass: "sales__slide--active",
   slideNextClass: "sales__slide-next",
   slidePrevClass: "sales__slide-prev",
   slideVisibleClass: "sales__slide--visible",

   pagination: {
      el: ".sales__slider-pagination",
      type: "bullets",
      bulletClass: "sales__slider-pagination-bullet",
      bulletActiveClass: "sales__slider-pagination-bullet--active",
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
      768: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      0: {
         slidesPerView: 1,
      },
   },
});

const salesSliderElement = document.querySelector(".sales__slider");
salesSliderElement.addEventListener("mouseenter", function () {
   salesSlider.autoplay.stop();
});

salesSliderElement.addEventListener("mouseleave", function () {
   salesSlider.autoplay.start();
});
