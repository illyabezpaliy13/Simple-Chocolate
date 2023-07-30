(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-review]'),
    closeModalBtn: document.querySelector('[data-close-review]'),
    backdrop3: document.querySelector('[data-backdrop-review]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop3.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop3.classList.toggle('is-hidden');
  }

  // function logBackdropClick() {
  //   console.log('Це клік в бекдроп');
  // }
})();
