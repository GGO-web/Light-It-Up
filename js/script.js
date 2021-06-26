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

const burger = document.querySelector(".burger");
const mainMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");

function openBurgerMenu() {
   if (!window.pageYOffset)
      header.classList.toggle("header--active");

   // header.classList.add("header--offset");
   burger.classList.add("active");
   mainMenu.classList.add("is-active");
   document.body.classList.add("hide-scroll");
}

function closeBurgerMenu() {
   if (!window.pageYOffset)
      header.classList.remove("header--active");

   // header.classList.remove("header--offset");
   burger.classList.remove("active");
   mainMenu.classList.remove("is-active");
   document.body.classList.remove("hide-scroll");
}

burger.addEventListener("click", function () {
   if (mainMenu.classList.contains("is-active")) {
      closeBurgerMenu();
   } else {
      openBurgerMenu();
   }
});

window.addEventListener("orientationchange", () => {closeBurgerMenu();});

const headerLinks = document.querySelectorAll(".header__list-link[data-scroll-to]");

if (headerLinks) {
   window.addEventListener("scroll", (event) => {
      headerLinks.forEach((link) => {
         const section = document.querySelector(link.dataset.scrollTo);
         const header = document.querySelector(".header");
         const sectionOffset = section.offsetTop - header.offsetHeight;
         const sectionHeight = section.offsetHeight;

         if (
            pageYOffset >= sectionOffset &&
            1 + pageYOffset <= sectionOffset + sectionHeight
         ) {
            link.classList.add("header__list-link--active");
         } else link.classList.remove("header__list-link--active");
      });
   });
}

const redirectItems = document.querySelectorAll("a[data-scroll-to], button[data-scroll-to]");

if (redirectItems) {
   redirectItems.forEach((item) => {
      item.addEventListener("click", (event) => {
         event.preventDefault();
         const targetItem = document.querySelector(
            event.target.dataset.scrollTo
         );

         if (targetItem) {
            closeBurgerMenu();
            const offsetTop = targetItem.offsetTop;
            const headerHeight = document.querySelector(".header").offsetHeight;

            window.scroll({
               top: offsetTop - headerHeight,
               behavior: "smooth",
            });
         }

         return false;
      });
   });
}

const reviewsSlider = new Swiper(".reviews__slider", {
   // Optional parameters
   loop: false,
   speed: 500,
   slidesPerView: 1,
   spaceBetween: 20,
   simulateTouch: false,
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



