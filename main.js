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
          if(endValue < 100){
            startValue += 1;
          }else if(endValue > 100 && endValue < 1000){
            startValue += 10;
            remainder = endValue % 10;
            endValue = endValue - remainder;
          }else if(endValue > 1000){
            startValue += 25;
            remainder = endValue % 25;
            endValue = endValue - remainder;
          }
          valueDisplays.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
            valueDisplays.textContent = valueDisplays.getAttribute("data-val") + '+'
          }
        }
      }, duration);
});
}


let bottomNav = document.querySelector(".bottom-navbar");
window.addEventListener("scroll", function() {
    if (this.scrollY > 200) {
        bottomNav.classList.add("fixed-top");
    }else{
        bottomNav.classList.remove("fixed-top");
    }
});
