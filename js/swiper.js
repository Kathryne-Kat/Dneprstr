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
  slidesPerView: "auto",
  // slidesPerView: 2,
  spaceBetween: 16,
  // breakpoints: {
  //   768: {
  //     slidesPerView: 1,
  //     spaceBetween: 16,
  //   },
  // },
  navigation: {
    nextEl: ".swr-button-next",
    prevEl: ".swr-button-prev",
  },
});

const swiper4 = new Swiper(".swiper-repair", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".swpr-button-next",
    prevEl: ".swpr-button-prev",
  },
});
const swiper5 = new Swiper(".swiper-plumbing", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".swprp-button-next",
    prevEl: ".swprp-button-prev",
  },
});
const swiper6 = new Swiper(".swiper-heating", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".swprh-button-next",
    prevEl: ".swprh-button-prev",
  },
});
