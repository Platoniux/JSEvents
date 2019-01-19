;(function() {
  'use strict'
  const navigation = document.querySelector('.js-nav');
  const acnhor = document.querySelector('.js-anchor');
  const svgContainer = document.querySelector('.js-svg');
  const clickEvent = new Event('click');
  navigation.addEventListener('click', function(e) {
    moveTo(e);
    svgContainer.dispatchEvent(clickEvent);
  });
  acnhor.addEventListener('click', moveTo);


  function moveTo(event) {
    event.preventDefault();
    let href = event.target.getAttribute('href');
    let target = document.querySelector(href);
    let posOfTarget = target.getBoundingClientRect().top;
    window.scrollTo({top: posOfTarget, behavior: 'smooth'});
  }

}());