document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.getElementById('copyButton');
  const textToCopy = document.getElementById('textToCopy');

  copyButton.addEventListener('click', function () {
    const text = textToCopy.textContent;

    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // alert("Текст успешно скопирован: " + text);
  });
});
