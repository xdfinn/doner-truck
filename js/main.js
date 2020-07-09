$(function () {

  $('.photo-slider-coffee').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: false,
    dots: false,
    zIndex: 1,
    responsive: [
      {
        breakpoint: 1155,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.all-testimonials').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    zIndex: 1
  });

  new WOW().init();

  $('.mob-menu-burger').on('click', function () {
    $('.header-menu').slideToggle();
  });

  $('.coffee-click').on('click', function () {
    $('.coffee-click').toggleClass('active-click');
  });

  $('.limonade-click').on('click', function () {
    $('.limonade-click').toggleClass('active-click');
  });

  $('.donut-click').on('click', function () {
    $('.donut-click').toggleClass('active-click');
  });

  $('.ice-cream-click').on('click', function () {
    $('.ice-cream-click').toggleClass('active-click');
  });

  // $('.header__btn-menu').on('click', function () {
  //   $('.header__box').toggleClass('active');
  // });

});