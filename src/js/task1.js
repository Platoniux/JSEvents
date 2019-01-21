;(function(){
  'use strict';
  let currentSlide = 0;
  const rightArrow = document.querySelector('.js-arrow-right');
  const leftArrow = document.querySelector('.js-arrow-left');
  const buttons = document.querySelectorAll('.js-btn');

  showSlide(currentSlide);

  rightArrow.addEventListener('click', function() {
    nextPreviousSlide(-1);
  });
  leftArrow.addEventListener('click', function() {
    nextPreviousSlide(1);
  });

  addEventListenerInBtns(buttons, switchSlideOn);

  function switchSlideOn(x) {
    showSlide(currentSlide = x);
  }

  function nextPreviousSlide(x) {
    showSlide(currentSlide += x);
  }

  function showSlide(slide) {
    let slides = document.getElementsByClassName('js-slide');
    let buttons = document.getElementsByClassName('js-btn');
    if (slide >= slides.length) {
      currentSlide = 0;
    } else if (slide < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = slide;
    }
    [].forEach.call(buttons, i => {
      if (i.style.backgroundColor) {
        i.style.backgroundColor = '';
      }
    });
    [].forEach.call(slides, i => {
      if (!i.classList.contains('js-display-none')) {
        i.classList.add('js-display-none');
      }
    });
    slides[currentSlide].classList.remove('js-display-none');
    buttons[currentSlide].style.backgroundColor = '#e27d60';
  }

  function addEventListenerInBtns(listOfBtns, func) {
    [].forEach.call(listOfBtns, (item, i) => {
      item.addEventListener('click', function() {
        func(i);
      });
    });
  }
}());