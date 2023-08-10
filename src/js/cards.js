const selectBtns = document.querySelectorAll('[data-select-btn]');
selectBtns.forEach(btn => {
  btn.addEventListener('click', () =>
    btn.parentNode.classList.toggle('buy-selected__card')
  );
});