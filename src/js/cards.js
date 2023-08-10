const selectBtns = document.querySelectorAll('[data-select-btn]');
selectBtns.forEach(btn => {
  btn.addEventListener('click', () =>
    btn.parentNode.classList.toggle('buy-selected__card')
  );
});

//? Submenu Func

const heartBtns = document.querySelectorAll('[data-heart-btn]');
let likesCounter = Math.round(Math.random() * (1100 - 1) + 1);
heartBtns.forEach(heartBtn => {
  heartBtn.addEventListener('click', () => {
    if (heartBtn.firstElementChild.classList.contains('submenu-selected__icon')) {
      likesCounter -= 1;
      console.log(likesCounter);
    } else {
      likesCounter += 1;
      console.log(likesCounter);
    }
    return heartBtn.firstElementChild.classList.toggle(
      'submenu-selected__icon'
    );
  });
});
