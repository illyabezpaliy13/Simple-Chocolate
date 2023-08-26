const selectBtns = document.querySelectorAll('[data-select-btn]');
selectBtns.forEach(btn => {
  btn.addEventListener('click', () =>
    btn.parentNode.classList.toggle('buy-selected__card')
  );
});

//? Submenu Func

const heartBtns = document.querySelectorAll('[data-heart-btn]');
// const likesText = document.querySelectorAll('[data-likes-text]');
// console.log(likesText.textContent.value);
let likesCounter = Math.round(Math.random() * (1100 - 1) + 1);
heartBtns.forEach(heartBtn => {
  heartBtn.addEventListener('click', () => {
    if (
      heartBtn.firstElementChild.classList.contains('submenu-selected__icon')
    ) {
      likesCounter -= 1;
      // likesText.textContent = likesCounter.value;
      // console.log(likesCounter);
      // console.log(likesText.textContent);
    } else {
      likesCounter += 1;
      // likesText.textContent = likesCounter.value;

      // likesText = likesCounter.textContent;
      // console.log(likesCounter);
    }
    return heartBtn.firstElementChild.classList.toggle(
      'submenu-selected__icon'
    );
  });
});

const burgerLinks = document.querySelectorAll('[data-burger-navElem]');
// console.log(burgerLinks);
burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerLinks.forEach(elem => elem.classList.remove('burger-active__page'));
    link.classList.toggle('burger-active__page');
  });
});
