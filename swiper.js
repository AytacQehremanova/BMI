const bannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });


  const trainersSwiper = new Swiper(".trainers-swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    breakpoints:{
      700:{
        slidesPerView:3,
        spaceBetween:30,
      },

      1024:{
        slidesPerView:4,
        spaceBetween:30,
      }
    }
  });