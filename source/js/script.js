var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var sliderBefore = document.querySelector('.slider__toggle--before');
var sliderAfter = document.querySelector('.slider__toggle--after');
var exampleWrapper = document.querySelector('.example__wrapper');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

sliderBefore.addEventListener('click', function() {
  if (window.innerWidth < 768) {
    exampleWrapper.classList.remove('example__wrapper--after');
    exampleWrapper.classList.add('example__wrapper--before');
  }
});

sliderAfter.addEventListener('click', function() {
  if (window.innerWidth < 768) {
    exampleWrapper.classList.remove('example__wrapper--before');
    exampleWrapper.classList.add('example__wrapper--after');
  }
});
