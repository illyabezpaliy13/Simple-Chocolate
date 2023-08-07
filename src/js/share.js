const textToCopy = document.getElementById('textToCopy');
document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.getElementById('copyButton');
  // const textToCopy = document.getElementById('textToCopy');

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

document.addEventListener('DOMContentLoaded', function () {
  const copyButton1 = document.getElementById('copyButton1');
  copyButton1.addEventListener('click', function () {
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

document.addEventListener('DOMContentLoaded', function () {
  const copyButton2 = document.getElementById('copyButton2');
  copyButton2.addEventListener('click', function () {
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

document.addEventListener('DOMContentLoaded', function () {
  const copyButton3 = document.getElementById('copyButton3');
  copyButton3.addEventListener('click', function () {
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