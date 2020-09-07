var image = document.querySelector('#shoper-image');
var text = document.querySelector('#asfarukh');
var target = document.querySelector('#new-target');
var yangi = document.querySelector('#noviy');
var popular_target = document.querySelector('#popular-target');
var popular = document.querySelector('#popular');

image.addEventListener('click', function() {
	text.classList.add('asfarukh_active');
});

target.addEventListener('click', function() {
	yangi.classList.add('new_active');
	popular.classList.remove('popular_active');
});

popular_target.addEventListener('click', function() {
	yangi.classList.remove('new_active');
	popular.classList.add('popular_active');
});

new WOW().init();

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.navbar__text').toggleClass('active');
		$('body').toggleClass('lock');
	});
});