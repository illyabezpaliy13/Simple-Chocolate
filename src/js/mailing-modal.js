(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-mailing]'),
    closeModalBtn: document.querySelector('[data-close-mailing]'),
    backdropMailing: document.querySelector('[data-backdrop-mailing]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop4.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdropMailing.classList.toggle('is-hidden-mailing');
  }
})();
