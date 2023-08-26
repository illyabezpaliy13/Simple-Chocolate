(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-buy]'),
    closeModalBtn: document.querySelector('[data-close-buy]'),
    backdrop2: document.querySelector('[data-backdrop-buy]'),
  };
  refs.closeModalBtn.addEventListener('click', toggleModal1);

  function toggleModal1() {
    refs.backdrop2.classList.toggle('is-hidden-buy');
  }
  refs.openModalBtn.forEach(elem =>
    elem.addEventListener('click', toggleModal1)
  );
})();

function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove();
      parent.classList.remove('error');
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;

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
        createError(input, 'Поле не заполнено!');
        result = false;
      }
    }
  }

  return result;
}

const refsDiscount = {
  openModalBtn: document.querySelector('[data-open-discount]'),
  closeModalBtn: document.querySelector('[data-close-discount]'),
  backdrop4: document.querySelector('[data-backdrop-discount]'),
  discountContainer: document.querySelector('.discount-container'),
};

function toggleModal() {
  refsDiscount.backdrop4.classList.toggle('is-hidden-discount');
}

document
  .getElementById('form_buy-now')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (validation(this) === true) {
      const TOKEN = '';
      const CHAT_ID = '-1001917308774';
      const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
      const success = document.getElementById('success');

      refsDiscount.openModalBtn.addEventListener('click', toggleModal);
      refsDiscount.closeModalBtn.addEventListener('click', toggleModal);

      document
        .getElementById('form_buy-now')
        .addEventListener('submit', function (e) {
          e.preventDefault();

          let message = `<b>Simply Chocolate Form</b>\n`;
          message += `<b>Name: </b> <i>${this.name.value}</i> \n`;
          message += `<b>Surname: </b> <i>${this.surname.value}</i> \n`;
          message += `<b>Email: </b> ${this.email.value} \n`;
          message += `<b>Phone: </b> ${this.phonenum.value} \n`;
          message += `<b>Card: </b> ${this.cardnum.value} \n`;
          message += `<b>Comment: </b> ${this.comment.value}`;

          axios
            .post(URI_API, {
              chat_id: CHAT_ID,
              parse_mode: 'html',
              text: message,
            })
            .then(res => {
              this.name.value = '';
              this.surname.value = '';
              this.email.value = '';
              this.phonenum.value = '';
              this.cardnum.value = '';
              this.comment.value = '';
              // success.style.display = 'block';
              // success.innerHTML = 'Message Send';
            })
            .catch(err => {
              console.warn(err);
            })
            .finally(() => {
              // console.log('The end');
              refsDiscount.openModalBtn.removeEventListener(
                'click',
                toggleModal
              );
              document
                .querySelector('[data-backdrop-buy]')
                .classList.toggle('is-hidden-buy');
            });
        });
    }
  });