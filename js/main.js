$(document).ready(function(){
  $('.slider-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    focusOnSelect: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    zIndex: 240,
    swipe: false,
  });

  $('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    focusOnSelect: true,
    pauseOnHover: false,
    centerMode: true,
  });
});
