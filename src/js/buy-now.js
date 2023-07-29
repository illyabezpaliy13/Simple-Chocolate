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

  // function logBackdropClick() {
  //   console.log('Це клік в бекдроп');
  // }
})();






document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    // formData.append()
    if (error === 0) {
      form.classList('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert('Error');
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute('type') === 'checkbox' &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
