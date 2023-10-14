var swiper = new Swiper(".mySwiper", {

  spaceBetween: 40,
  loop:true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  breakpoints:
   {
      // when window width is <= 499px
      320: {
        slidesPerView: 1,
      },
      // when window width is <= 999px
      480: {
        slidesPerView: 2,
      },
       768: {
        slidesPerView: 3,
      },
       1200: {
        slidesPerView: 4,
      },
    },
});