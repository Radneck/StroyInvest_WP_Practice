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
  var elem = document.querySelector('.calc-range');
  var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true, step: 100000 });
  var pers, month, result, total, monthly;
  var money = +$('.calc-range').val();

  $('input[name="radiobtn"]').on('change', function(event) {
    month = +$(this).attr('data-month');
    pers = +$(this).attr('data-per');
    result = Math.round(pers / 12 * month * money);
    total = result + money;
    monthly = parseInt(result / month);
    $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('#month').text(month);
  });

  $('.calc-range').on('change', function (event) {
    $('.calc-summ__invest_num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    var radio = $('input[name="radiobtn"]:checked');
    money = +$(this).val();
    month = +radio.attr('data-month');
    pers = +radio.attr('data-per');
    result = Math.round(pers / 12 * month * money);
    total = result + money;
    monthly = parseInt(result / month);
    $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });
});