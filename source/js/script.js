var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('toggle--closed')) {
    navToggle.classList.remove('toggle--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navToggle.classList.add('toggle--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var viewportWidth = window.innerWidth;
  if (viewportWidth < 1440) {
    var i;
    var slides = document.getElementsByClassName("range__item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
  }
}
