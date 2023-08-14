// $(document).ready(function () {
//     $('.slick__slider').slick({
//         arrows: false,
//         // dots: true,
//         slidesToShow: 3,
//         speed: 1000,
//         infinite: false,
//         draggable: false,
//         variableWidth: true,
//         responsive: {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     });
// });

$('.slick__slider').slick({
  dots: true,
  // prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  // nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 1,
  variableWidth: true, // обовязково додається, щоб частина картки заходило за вьюпорт

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
