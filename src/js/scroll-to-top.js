const btnEl = document.getElementById('back-to-up');
window.onscroll = () => {
  toggleTopButton();
};
btnEl.addEventListener('click', scrollToTop);
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // window.scrollTo({ top: 1, behavior: 'smooth' });
}

function toggleTopButton() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnEl.classList.remove('d-none');
  } else {
    btnEl.classList.add('d-none');
  }
}
