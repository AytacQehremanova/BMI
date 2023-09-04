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



  const newsSwiper = new Swiper(".news-swiper", {
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
        slidesPerView:3,
        spaceBetween:30,
      }
    }
  });



  const clientsSwiper = new Swiper(".clients-swiper", {
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
        slidesPerView:6,
        spaceBetween:30,
      }
    }
  });


  const partnerssSwiper = new Swiper(".partners-swiper", {
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
        slidesPerView:8,
        spaceBetween:30,
      }
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });


  

  const trainingsSwiper = new Swiper(".trainings-swiper", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
