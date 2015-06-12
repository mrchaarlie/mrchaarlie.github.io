// Image1 = new Image(1,1);
// Image1.src = "img/linkedIn-icon-hover.png";
// Image2 = new Image(1,1);
// Image2.src = "img/github-icon-hover.png";
// Image3 = new Image(1,1);
// Image3.src = "img/se-icon-hover.png";
// Image4 = new Image(1,1);
// Image4.src = "img/behance-icon-hover.png";
// Image5 = new Image(1,1);
// Image5.src = "img/flickr-icon-hover.png";
// Image6 = new Image(1,1);
// Image6.src = "img/500px-icon-hover.png";
var scrollNav = 0;
var c = 0;
var flairPosition = 0;

$(document).ready(function(){
	
	$('#cards').mixItUp();

	$('.card > div').hover(function(){
		$(this).stop().find('.dark-bg').css("opacity","1");
	},function(){
		$(this).stop().delay(200).queue(function (next) { 
			$(this).find('.dark-bg').css("opacity","0")
			next();
	  });
	});

	$('.links a').click(function(e){
		e.preventDefault();
		if ($(this).text().toLowerCase().indexOf('home') >= 0){
			$('html,body').animate({
      	scrollTop: 0
    	},{
    		duration: 700,
    		easing: 'easeOutCubic'
    	});
		}else if($(this).text().toLowerCase().indexOf('port') >= 0){
			$('html,body').animate({
      	scrollTop: $('#portfolio').offset().top - 88
    	},{
    		duration: 700,
    		easing: 'easeOutCubic'
    	});
		}else if ($(this).text().toLowerCase().indexOf('abou') >= 0){
			$('html,body').animate({
      	scrollTop: $('#about').offset().top - 218
    	},{
    		duration: 700,
    		easing: 'easeOutCubic'
    	});
		}else if ($(this).text().toLowerCase().indexOf('sum') >= 0){
			$('html,body').animate({
      	scrollTop: $('#resume').offset().top - 100
    	},{
    		duration: 700,
    		easing: 'easeInOutCubic'
    	});
		}
	});

	$('.portfolio-link').click(function(e){
		e.preventDefault();
		if ($(this).text().toLowerCase().indexOf('view r') >= 0){
			$('html,body').animate({
      	scrollTop: $('#resume').offset().top - 100
    	},{
    		duration: 700,
    		easing: 'easeOutCubic'
    	});
		}
	});

	$('.scroll-nav .links a').click(function(e){
		// $('.scroll-nav .links a').removeClass('active');
		// $(this).addClass('active');
	});


});

$(document).scroll(function(){
	
	windowPosition = $(window).scrollTop();
	windowHeight = $(window).height();
	// console.log('scroll');
	
		//show/hide scroll-nav
	if(windowPosition > $('.section1').offset().top - 89 && scrollNav == 0){
		//show
		$('.scroll-nav').stop().animate({
			top: 0
		}, 200);
		// $('.scroll-nav').css('opacity','1');
		scrollNav = 1;
	}else if (windowPosition < $('.section1').offset().top - 89 && scrollNav == 1){
		//hide
		$('.scroll-nav').stop().animate({
			top: -83
		}, 200);
		scrollNav = 0;
		// $('.scroll-nav').css('opacity','0');
	}

	if (windowPosition >= $('#portfolio').offset().top - 88 && windowPosition < $('#about').offset().top - 218){
		$('.scroll-nav .links a').removeClass('active');
		$('#portfolio-link').addClass('active');
	}else if (windowPosition >= $('#about').offset().top - 218 && windowPosition < $('#resume').offset().top - 100){
		$('.scroll-nav .links a').removeClass('active');
		$('#about-link').addClass('active');
	}else if (windowPosition >= $('#resume').offset().top - 100){
		$('.scroll-nav .links a').removeClass('active');
		$('#resume-link').addClass('active');
	}
	parallaxFlair();

});

$(window).resize(function(){
	flairPosition = $('.flair').offset().top;
});

function parallaxFlair(){

	if (c < 4){
		flairPosition = $('.flair').offset().top;
		c = c + 1;
	}

	flairPosition = $('.flair').offset().top;
	if (windowPosition >= flairPosition - windowHeight && windowPosition < flairPosition + 340){
		// console.log('x');

		//how fast the scrolling should be
		scale = 0.6;

		min = flairPosition-windowHeight;
		max = flairPosition + 340;

		yPosition = ((windowPosition-min)/(max-min) * scale + (1-scale)/2)*100;
		// console.log(yPosition);
		$('.flair').css('background-position-y', yPosition + '%');
	}
};