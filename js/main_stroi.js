$(document).ready(function () {
  var menuBtn = $('.top-nav__btn');
  var leftBarBtn = $('.left-sidebar__btn');
  var menu = $('.top-nav__menu');
  // var leftBarMenu = $('.left-sibebar__menu');

  menuBtn.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('top-nav__menu_active');
  });
  leftBarBtn.on('click', function (event) {
    event.preventDefault();
    // console.log('Эта хуйня должна работать!');
    $('.left-sidebar__menu').toggleClass('left-sidebar__menu_active');
  });
  
  $('.directions-blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});