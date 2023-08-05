// document.addEventListener('DOMContentLoaded', () => {
//   const mediaFiles = document.querySelectorAll('img, video');
//   let i = 0;

//   Array.from(mediaFiles).forEach((file, index) => {
//     file.onload = () => {
//       i++;

//       percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1);

//       if (i === mediaFiles.length && file.complete) {
//         preloader.classList.add('preloader--hide');
//         percents.innerHTML = 100;
//       }
//     };
//   });
// });


// window.onload = function () {
//     let preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
// }

let preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide');
    setTimeout(() => {
        preloader.remove()
    }, 600);
})
// document.addEventListener('DOMContentLoaded', () => {
//   const mediaFiles = document.querySelectorAll('picture, source, video');
//   let i = 0;

//   Array.from(mediaFiles).forEach((file, index) => {
//     file.onload = () => {
//       i++;

//       percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1);

//       if (i === mediaFiles.length) {
//         preloader.classList.add('preloader--hide');
//         percents.innerHTML = 100;
//       }
//     };
//   });
// });
