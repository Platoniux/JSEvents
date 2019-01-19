;(function() {
  'use strict'
  const blockOfTabs = document.querySelector('.js-tab');
  const allMarks = document.getElementsByClassName('js-marks');
  const allRules = document.getElementsByClassName('js-contents');

  blockOfTabs.addEventListener('click', function(e) {
    showRule(e, allMarks, allRules);
  });
  
  function showRule(event, arrOfBtn, arrOfBlock) {
    event.preventDefault();
    let target = event.target;
    let index;
    if (target.classList.contains('js-mark-on')) {
      return;
    }
    [].forEach.call(arrOfBtn, (item, i) => {
      if (item.classList.contains('js-mark-on')) {
        item.classList.remove('js-mark-on');
      } else if (target === item) {
        item.classList.add('js-mark-on');
        index = i;
      }
    });
    [].forEach.call(arrOfBlock, (item, i) => {
      if (!item.classList.contains('js-display-none')) {
        item.classList.add('js-display-none');
      } else if (index === i) {
        item.classList.remove('js-display-none');
      }
    });
  }
}());