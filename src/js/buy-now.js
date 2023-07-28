(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-open-buy]'),
      closeModalBtn: document.querySelector('[data-close-buy]'),
      backdrop2: document.querySelector('[data-backdrop-buy]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.backdrop2.addEventListener('click', logBackdropClick);

    function toggleModal() {
      refs.backdrop2.classList.toggle('is-hidden');
    }

    function logBackdropClick() {
      console.log('Це клік в бекдроп');
    }
  })();