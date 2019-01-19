;(function() {
  'use strict'
  const modal = document.querySelector('.js-modal');
  const buttOpenModal = document.querySelector('.js-btn-modal');

  buttOpenModal.addEventListener('click', function() {
    showModal(modal);
  })

  modal.addEventListener('click', function(event) {
    hideModal(event, modal)
  });

  function showModal(entity) {
    let modalWindow = entity;
    modalWindow.classList.toggle('js-visibility-visible');
  }

  function hideModal(e, entity) {
    let target = e.target;
    let modalWindow = entity;
    if (target.classList.contains('js-overlay') || target.classList.contains('js-btn-close-modal')) {
      modalWindow.classList.toggle('js-visibility-visible');
    }
  }
}());