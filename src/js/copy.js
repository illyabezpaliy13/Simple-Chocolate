function copy() {
  let copyText = 'Simply Chocolate';
  copyText.select();
  document.execCommand('copy');
}

document.querySelector('#copy').addEventListener('click', copy);
