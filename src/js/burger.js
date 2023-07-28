// (() => {
//     const refs = {
//       openModalBtn: document.querySelector('[data-open-modal]'),
//       closeModalBtn: document.querySelector('[data-close-modall]'),
//       backdropp: document.querySelector('[data-backdrop]'),
//     };

//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);

//     refs.backdropp.addEventListener('click', logBackdropClick);

//     function toggleModal() {
//       refs.backdropp.classList.toggle('is-hiddenn');
//     }

//     function logBackdropClick() {
//       console.log('Це клік в бекдроп');
//     }
//   })();