window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
});

$(document).ready(function(){
	// carousel
    $('.reviews__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron/left.png" alt=""></button>',
			  nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron/right.png" alt=""></button>',
        fade: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.reviews__item'
      });
      $('.reviews__item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.reviews__inner'
      });
})