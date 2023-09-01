Fancybox.bind('[data-fancybox="play"]', {});
Fancybox.bind('[data-fancybox="play-button"]', {});

if (document.querySelector(".counter-span")) {
  let Item = document.querySelectorAll(".item");
  let valueDisplays = document.querySelectorAll(".counter-span");
  let duration = 20;
  let counterStatus = Array(Item.length).fill(false);

  window.addEventListener("scroll", () => {
    Item.forEach((item, index) => {
      let position = item.offsetTop - 600;
      if (window.scrollY > position) {
        counterStatus[index] = true;
      }
    });
  });

  valueDisplays.forEach((valueDisplays, index) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let remainder = 0;
    let counter = setInterval(function () {
      if (counterStatus[index] == true) {
        if (endValue < 100) {
          startValue += 1;
        } else if (endValue > 100 && endValue < 1000) {
          startValue += 10;
          remainder = endValue % 10;
          endValue = endValue - remainder;
        } else if (endValue > 1000) {
          startValue += 25;
          remainder = endValue % 25;
          endValue = endValue - remainder;
        }
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
          valueDisplays.textContent =
            valueDisplays.getAttribute("data-val") + "+";
        }
      }
    }, duration);
  });
}

let bottomNav = document.querySelector(".bottom-navbar");
window.addEventListener("scroll", function () {
  if (this.scrollY > 200) {
    bottomNav.classList.add("fixed-top");
  } else {
    bottomNav.classList.remove("fixed-top");
  }
});




let scrollButton = document.querySelector(".page-scroll-button");
window.addEventListener("scroll", function () {
  if (this.scrollY > 300) {
    scrollButton.classList.remove("d-none");
  } else {
    scrollButton.classList.add("d-none");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});



let shareButton = document.querySelectorAll(".share-button");
let hideIcon = document.querySelectorAll(".hide-icon");

shareButton.forEach((btn, index) => {
  btn.addEventListener('click', function(){
    hideIcon[index].classList.toggle('d-none');
  })
})


Fancybox.bind('[data-fancybox="gallery-foto"]', {});
Fancybox.bind('[data-fancybox="gallery-video"]', {});



if (document.querySelector(".gallery-wrapper")) {
  let galleryButtons = document.querySelectorAll(".gallery-buttons button");
  let galleryWrapper = document.querySelectorAll(".gallery-wrapper");

  galleryButtons[0].classList.add("active");
  galleryWrapper[0].classList.remove("d-none");

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let category = button.getAttribute("data-category");
      for (let i = 0; i < galleryButtons.length; i++) {
        galleryButtons[i].classList.remove("active");
      }
      button.classList.add("active");

      for (let i = 0; i < galleryWrapper.length; i++) {
        galleryWrapper[i].classList.add("d-none");
      }
      let activeContainer = Array.from(galleryWrapper).find(
        (container) => container.getAttribute("data-category") === category
      );
      activeContainer.classList.remove("d-none");
    });
  });
}




if(document.querySelector('.training-gridder')){
  const gridItem = document.querySelectorAll('.training-gridder .grid-item');
  const gridContent = document.querySelectorAll('.training-gridder .grid-content');

  gridItem.forEach((item) => {
    item.addEventListener('click', function(){
      let itemID = item.getAttribute('data-id');
      for(let i = 0; i < gridContent.length; i++){
        gridContent[i].classList.remove('open')
      }
      let activeContent = Array.from(gridContent).find((content) => content.getAttribute('data-id') == itemID);
      if(activeContent){
        activeContent.classList.toggle('open')
      }
    })
  })
}


