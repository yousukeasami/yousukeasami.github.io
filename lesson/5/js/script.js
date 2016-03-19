
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


 	$(".sub").hide();
    	$(".menu").hover(function(){
            $('.sub').slideDown("fast")
        },
        function(){
            $(".sub").slideUp("fast");
    })



});

$(document).ready(function(){
  		$('.bxslider1').bxSlider({
  		 	//auto: true,  //自動再生
  		  //pagerCustom: '#bx-pager',//ページャーを画像にする


       
  	});

  		$('.bxslider2').bxSlider({
 
  		 slideWidth: 900, //スライド内の1要素の幅
  		  maxSlides: 4, //一度に表示させる数
  		  minSlides: 4, //最低限表示させる数
  		  moveSlides:1, //スライドで動かす数
  		  pager:false
        

  	});
});

