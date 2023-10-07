const swiper1 = new Swiper(".swiper-work", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".sw-button-next",
    prevEl: ".sw-button-prev",
  },
});

const swiper2 = new Swiper(".swiper-blog", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".swb-button-next",
    prevEl: ".swb-button-prev",
  },
});

const swiper3 = new Swiper(".swiper-reviews", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     },
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40
  //     }
  // }
  navigation: {
    nextEl: ".swr-button-next",
    prevEl: ".swr-button-prev",
  },
});
