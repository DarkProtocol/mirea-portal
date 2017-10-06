jQuery(document).ready(function($){

	// аккордион профилей
	$('.accordion-name span').on('click', function(event) {
		$(this).closest('.accordion').toggleClass('opened');
	});

});