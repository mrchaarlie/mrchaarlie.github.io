Image1 = new Image(1,1);
Image1.src = "img/linkedIn-icon-hover.png";
Image2 = new Image(1,1);
Image2.src = "img/github-icon-hover.png";
Image3 = new Image(1,1);
Image3.src = "img/se-icon-hover.png";
Image4 = new Image(1,1);
Image4.src = "img/behance-icon-hover.png";
Image5 = new Image(1,1);
Image5.src = "img/flickr-icon-hover.png";
Image6 = new Image(1,1);
Image6.src = "img/500px-icon-hover.png";


(function($){
	/*Page Transition*/
	$("body").css("display", "none");
	$("body").fadeIn(800);
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(200, redirectPage);      
	});

	function redirectPage() {
		window.location = linkLocation;
	}
	
})(jQuery);