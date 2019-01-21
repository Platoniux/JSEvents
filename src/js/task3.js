;(function() {
  'use strict';
  const svgContainer = document.querySelector('.js-svg');
  const pairSvgRectangles = document.querySelectorAll('.js-rect-lft');
  const oneSvgRectangle = document.querySelector('.js-rect-rght');
  const navigation = document.querySelector('.js-nav');

  svgContainer.addEventListener('click', showHideNavigation);


  function showHideNavigation() {
    [].forEach.call(pairSvgRectangles, i => {
      i.classList.toggle('js-rect--left');
    });
    oneSvgRectangle.classList.toggle('js-rect--right');
    navigation.classList.toggle('js-show-nav');
  }
}());