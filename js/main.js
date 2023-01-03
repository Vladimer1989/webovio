$('.works__btn-1').on('click', function(){
	$('.works__box-2-text-1').toggleClass('works__box-2-text-1--active');
});
$('.works__btn-2').on('click', function(){
	$('.works__box-2-text-2').toggleClass('works__box-2-text-2--active');
});
$('.works__btn-3').on('click', function(){
	$('.works__box-2-text-3').toggleClass('works__box-2-text-3--active');
});
$('.works__btn-1').on('click', function(){
	$('.works__box-2-row-1').toggleClass('works__box-2-row-1--active');
});
$('.works__btn-2').on('click', function(){
	$('.works__box-2-row-2').toggleClass('works__box-2-row-2--active');
});
$('.works__btn-3').on('click', function(){
	$('.works__box-2-row-3').toggleClass('works__box-2-row-3--active');
});
$('.works__btn-1').on('click', function(){
	$('.works__btn-1').toggleClass('works__btn-1--active');
});
$('.works__btn-2').on('click', function(){
	$('.works__btn-2').toggleClass('works__btn-2--active');
});
$('.works__btn-3').on('click', function(){
	$('.works__btn-3').toggleClass('works__btn-3--active');
});
$('.customes__body').slick({
	dots: true,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
});