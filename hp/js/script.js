var startPos = 0;


$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(this.hash);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position - 49+ "px"}, speed, "swing");
		return false;
	});
});