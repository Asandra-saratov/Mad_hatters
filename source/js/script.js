var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('toggle--closed')) {
    navToggle.classList.remove('toggle--closed');
    navMain.classList.add('main-nav--opened');
  }
  else {
    navToggle.classList.add('toggle--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let range__list = document.querySelectorAll('.range__list .range__item');
let currentCarousel = 0;
let carouselInterval = setInterval(nextCarousel, 6000);
function nextCarousel() {
  range__list[currentCarousel].className = 'range__item';
  currentCarousel = (currentCarousel + 1) % range__list.length;
  range__list[currentCarousel].className = 'range__item range__demonstration';
};

