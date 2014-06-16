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