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
