var startPos = 0;

$(window).scroll(function(){
	var menuHeight = $("#menu-wrap").height();

  var currentPos = $(this).scrollTop();
  if (currentPos >= startPos) {
	  if($(window).scrollTop() > 200) {
      $("#menu-wrap").css("top", "-" + menuHeight + "px");
		}
  } 
  else {
    $("#menu-wrap").css("top", 0 + "px");
  }
  startPos = currentPos;
});

$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(this.hash);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});