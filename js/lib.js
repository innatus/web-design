function docenteExpand(){
	$('.teacher-details').slideToggle('toggleSlide');
	$('html, body').stop().animate({
		'scrollTop': $('.teacher').offset().top
	}, 500, 'swing', function () {
		//window.location.hash = target;
	});
};

$(document).ready(function(){

	// Detalles del docente solo cambio de texto
	$('.teacher h1').on('click', function(){
		docenteExpand();
		if ( $('.teacher h1 span').text() == 'ver-' ) {
			$('.teacher h1 span').text('ver+');
		} else{
			$('.teacher h1 span').text('ver-');
		};
	});

	$('.teacher-details p i').on('click', function(){
		docenteExpand();
		$('.teacher h1 span').text('ver+');
	});

	// ir arriba
	$('.top').on('click', function(e){
		e.preventDefault();
		$('html, body').stop().animate({
			'scrollTop': 0
		}, 1200, 'swing', function () {
			//window.location.hash = target;
		});
	});

	// $('a[href^="#detalles"], a[href^="#second"]').on('click',function (e) {
	// 	e.preventDefault();

	// 	var target = this.hash;
	// 	$target = $(target);

	// 	$('html, body').stop().animate({
	// 		'scrollTop': $target.offset().top - 79
	// 	}, 900, 'swing', function () {
	// 		//window.location.hash = target;
	// 	});
	// });

	// boton te lleva a ver cursos manuales
	$('#link-to-manuales').on('click', function(){
		$('html, body').stop().animate({
			'scrollTop': $('#manuales').offset().top +17
		}, 900, 'swing', function () {
			//window.location.hash = target;
		});
	});

	// boton te lleva a ver cursos informaticos
	$('#link-to-informaticos').on('click', function(){
		$('html, body').stop().animate({
			'scrollTop': $('#informaticos').offset().top +17
		}, 900, 'swing', function () {
			//window.location.hash = target;
		});
	});

	// boton que te lleva a inscripcion
	$('#link-to-inscripcion').on('click', function(){
		$('html, body').stop().animate({
			'scrollTop': $('.full-price').offset().top
		}, 1000, 'swing', function () {
			//window.location.hash = target;
		});
	});

	// se abre el menú
	$('.menu').on('click', function(){
		$('.expanded-menu').fadeIn(400);
		$('.menu-items').addClass('expand');
		$('body, html').css('overflow', 'hidden')

		// if ( $(window).width() <= 640 ) {
		// 	$('body, html').css('overflow', 'hidden')
		// } else{
		// 	$('body, html').css('overflow', 'scroll')
		// };
	});

	// se abre el menú
	$('.menu.menu-exp').on('click', function(){
		$('.expanded-menu').fadeOut(100);
		$('.menu-items').removeClass('expand');
		$('body, html').css('overflow', 'visible')
	});

	// $('.acronym, .courseTitle').click(function(event){
	// 	event.preventDefault();

	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 	}, 1000);
	// });

	// $('.fa.fa-angle-double-up').css('display','none');

	
// $(window).resize(function(){
// 	blog();
});

$(window).scroll(function(){
	var scrollPos 		= $(this).scrollTop();
		headerHei 		= $('.background').height();
		navHei		 	= $('.navbar').offset().top;
		navDist			= (navHei - scrollPos); 

	if (scrollPos > headerHei) {
		$('.navbar').css('position','fixed');
		$('.modulo').css('padding-top','185px');
		// if ( $(window).width() <= 640) {
			$('.fa.fa-angle-double-up').show();
			// $('.fa.fa-angle-double-up').css('display','inline');
		// };

	} else {
		$('.navbar').css('position','relative');
		$('.modulo').css('padding-top','100px');
		$('.fa.fa-angle-double-up').hide();
	};
});