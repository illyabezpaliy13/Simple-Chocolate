(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-review]'),
    closeModalBtn: document.querySelector('[data-close-review]'),
    backdrop3: document.querySelector('[data-backdrop-review]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // refs.backdrop3.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop3.classList.toggle('is-hidden-review');
  }

  // function logBackdropClick() {
  //   console.log('Це клік в бекдроп');
  // }
})();

function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      // parent.querySelector('.error-label').remove();
      parent.classList.remove('error');
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    // const errorLabel = document.createElement('label');

    // errorLabel.classList.add('error-label');
    // errorLabel.textContent = text;

    parent.classList.add('error');

    parent.append(errorLabel);
  }

  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {
    removeError(input);

    if (input.dataset.minLength) {
      if (input.value.length < input.dataset.minLength) {
        removeError(input);
        createError(input, `Min. length: ${input.dataset.minLength}`);
        result = false;
      }
    }

    if (input.dataset.maxLength) {
      if (input.value.length > input.dataset.maxLength) {
        removeError(input);
        createError(input, `Max. length: ${input.dataset.maxLength}`);
        result = false;
      }
    }

    if (input.dataset.required == 'true') {
      if (input.value == '') {
        removeError(input);
        createError(input, 'Field is empty!');
        result = false;
      }
    }
  }

  return result;
}

const refsThanks = {
  openModalBtn: document.querySelector('[data-open-thanks]'),
  closeModalBtn: document.querySelector('[data-close-thanks]'),
  backdrop5: document.querySelector('[data-backdrop-thanks]'),
  // discountContainer: document.querySelector('.discount-container'),
};

//! bc5 - thanks
//! bc3 - review-modal


function toggleModalThanks() {
  refsThanks.backdrop5.classList.toggle('is-hidden-thanks');
}

document
  .getElementById('comment__form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (validation(this) === true) {
      const TOKEN = '';
      const CHAT_ID = '-1001917308774';
      const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
      const success = document.getElementById('success');

      refsThanks.openModalBtn.addEventListener('click', toggleModalThanks);
      refsThanks.closeModalBtn.addEventListener('click', toggleModalThanks);

      document
        .getElementById('comment__form')
        .addEventListener('submit', function (e) {
          e.preventDefault();

          let message = `<b>Simply Chocolate Review</b>\n`;
          message += `<b>Name: </b> <i>${this.commentname.value}</i> \n`;
          // message += `<b>Surname: </b> <i>${this.surname.value}</i> \n`;
          message += `<b>Email: </b> ${this.commentemail.value} \n`;
          message += `<b>Phone: </b> ${this.commentphonenum.value} \n`;
          // message += `<b>Card: </b> ${this.cardnum.value} \n`;
          message += `<b>Comment: </b> ${this.commentreview.value}`;

          axios
            .post(URI_API, {
              chat_id: CHAT_ID,
              parse_mode: 'html',
              text: message,
            })
            .then(res => {
              this.commentname.value = '';
              // this.surname.value = '';
              this.commentemail.value = '';
              this.commentphonenum.value = '';
              // this.cardnum.value = '';
              this.commentreview.value = '';
              // success.style.display = 'block';
              // success.innerHTML = 'Message Send';
            })
            .catch(err => {
              console.warn(err);
            })
            .finally(() => {
              // console.log('The end');
              refsThanks.openModalBtn.removeEventListener(
                'click',
                toggleModalThanks
              );
              document
                .querySelector('[data-backdrop-review]')
                .classList.toggle('is-hidden-review');
            });
        });
    }
  });





  // (() => {
    // const refs = {
    //   openModalBtn: document.querySelector('[data-open-thanks]'),
    //   closeModalBtn: document.querySelector('[data-close-thanks]'),
    //   backdrop5: document.querySelector('[data-backdrop-thanks]'),
    // };

    // refs.openModalBtn.addEventListener('click', toggleModal);
    // refs.closeModalBtn.addEventListener('click', toggleModal);

    // refs.backdrop5.addEventListener('click', logBackdropClick);

    // function toggleModal() {
    //   refs.backdrop5.classList.toggle('is-hidden-thanks');
    // }
  // })();
