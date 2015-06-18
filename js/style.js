// Author: Charlie Wu
// Date: June 2015

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
var isStory = 0;
var navHeight = 83;
var c = 0;
var flairPosition = 0;
var windowHeight = 800;
$(document).ready(function(){
	
	//init
	$('#cards').mixItUp();
	windowHeight = $(window).height();
	navHeight = $('.scroll-nav').height();

	//
	$('.card > div').hover(function(){
		$(this).stop().find('.dark-bg').css("opacity","1");
	},function(){
		$(this).stop().delay(200).queue(function (next) { 
			$(this).find('.dark-bg').css("opacity","0")
			next();
	  });
	});

	//expand card
	$('.card').click(function(){
		if($(this).find('.dark-bg').hasClass('active')){
			$('.cards .dark-bg').removeClass('active');
			$(this).find('.card-container').css('opacity',0.7);
			hideStory();
		}else{
			$('.cards .dark-bg').removeClass('active');
			$(this).find('.dark-bg').addClass('active');
			$(this).find('.card-container').css('opacity',1);
			showStory($(this));
		}
	});

	$('.story .x').click(function(){
		hideStory();
	})

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
			top: -navHeight
		}, 200);
		scrollNav = 0;
		if (isStory == 1)
			hideStory();
		// $('.scroll-nav').css('opacity','0');
	}else if(windowPosition > $('.section3').offset().top - (windowHeight * 0.8) - 20){
		if (isStory == 1)
			hideStory();
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
	windowHeight = $(window).height();
	resizeStory();
});

function showStory(card){
	// console.log('show');
	isStory = 1;
	loadStory(card);

	storyHeight = (windowHeight - navHeight) * 0.20;
	storyTop = (windowHeight - navHeight) * 0.15 + navHeight;
	
	if (storyHeight < 180)
		storyHeight = 180;

	$('.story').css({
		'height': storyHeight
	});
	
	$('.story').stop().slideDown();

	// $(window).scrollTop(card.offset().top)
	$('html,body').animate({
  	scrollTop: card.offset().top - $('.scroll-nav').height()
	},{
		duration: 500,
		easing: 'easeOutCubic'
	});
	// $('.story').animate({'width':storyWidth},410);
	// $('.story').show("slide", { direction: "left" }, 410);
}

function hideStory(){
	isStory = 0;
	// console.log('hide');

	$('.story').stop().slideUp();

	$('.cards .dark-bg').removeClass('active');
	$('.cards .card-container').css('opacity',0.7);

}

function resizeStory(){
	storyHeight = (windowHeight - navHeight) * 0.20;
	if (storyHeight < 180)
		storyHeight = 180;

	$('.story').css({
		'height': storyHeight
	});
}

function loadStory(card){
	if (card.hasClass('curio')){
		$('.story .title').text("Crowd Curio");
		$('.story .text').html("View live link here: <a href='http://alpha.crowdcurio.com'>alpha.crowdcurio.com</a>.");

		console.log('x');
	}else if (card.hasClass('fox')){
		$('.story .title').text("Low-Poly Fox Art");
		$('.story .text').html("View in more detail on my <a href='https://www.behance.net/gallery/21297315/Low-Poly-Fox'>behance</a>.");


	}else if (card.hasClass('animal')){
		$('.story .title').text("Animal Icons");
		$('.story .text').html("View in more detail on my <a href='https://www.behance.net/gallery/21266715/Animal-Icon-Design'>behance</a>.");

	}else if (card.hasClass('yelp')){
		$('.story .title').text("Yelp Web Redesign");
		$('.story .text').html("View in more detail on my <a href='https://www.behance.net/gallery/19352437/Yelp-Web-UIUX-Redesign'>behance</a>.");

	}else if (card.hasClass('focus')){
		$('.story .title').text("Focus Android Study App");
		$('.story .text').html("View in more detail on my <a href='https://www.behance.net/gallery/13415167/Focus-Productivity-Android-App'>behance</a>.");

	}else if (card.hasClass('uw')){
		$('.story .title').text("University of Waterloo Engineering Orientation Website");
		$('.story .text').html("View in more detail on my <a href='https://www.behance.net/gallery/13884929/University-Waterloo-Engineering-Orientation-Webpage'>behance</a>.");

	}else if (card.hasClass('ashcity')){
		$('.story .title').text("Ash City iOS App");
		$('.story .text').html("View in more detail on my <a href='https://www.behance.net/gallery/11486751/Ash-City-iOS-App'>behance</a>.");

	}else if (card.hasClass('odette')){
		$('.story .title').text("Odette Annable");
		$('.story .text').html("View in more detail on my <a href='https://www.behance.net/gallery/11486527/Odette-Annable-(Yustman)'>behance</a>.");

	}

}
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