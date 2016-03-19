
$(document).ready(function(){



	$("#show li").mouseover(function(){
		    $('#hide_menu').show();

			$ans = $(this).offset();
			$mywidth = $(this).width();
			$myTop = $ans.top;

			$position_L = $mywidth - 30 +'px'; 
			$position_T = $myTop - 134 +'px'

		     $('#hide_menu').css({
		     	"top"  : $position_T,
		     	"left" : $position_L
		     });

	});

	$('#show li').mouseleave(function(){
		    
		    $('#hide_menu').hide();
		    return false;
	});

		
});


