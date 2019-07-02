$(document).ready(function(){
  $('.sliderBox').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerPadding: '0',
          slidesToShow: 2
        },
      },
      {
        breakpoint: 639,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        },
      }
    ]
  });
});
