head.ready(function() {

	function height(){ 
		var windowheight = $(window).height();
		var imgheight = (windowheight);
		$(".js-bigimg").css("min-height", imgheight);
	}
	height();

	// RESIZE
	$(window).resize(function(){
	  height();
	});
});