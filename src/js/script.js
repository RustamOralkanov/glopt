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