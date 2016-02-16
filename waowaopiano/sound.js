function audio_play() {
   audio.play();
}
 
function audio_pause() {
   audio.pause();
}


$(function(){

var $piano=$('#piano');
var $siro=$('#siro');
var $kuro=$('#kuro');
var $li=$('li');
var $do=$('#do');
var $re=$('#re');
var $mi=$('#mi');
var $fa=$('#fa');
var $so=$('#so');
var $ra=$('#ra');
var $si=$('#si');

var $shado=$('#shado');
var $share=$('#share');
var $shafa=$('#shafa');
var $shaso=$('#shaso');

$do
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();
})
.mouseout(function(){
$(this).css('background-color','white');
audio.play();
audio.currentTime = 0;
});


$re
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','white');
audio.play();
audio.currentTime = 0;
});

$mi
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','white');
audio.play();
audio.currentTime = 0;
});


$fa
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','white');
audio.play();
audio.currentTime = 0;
});


$so
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','white');
audio.play();
audio.currentTime = 0;
});


$ra
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','white');
audio.play();
audio.currentTime = 0;
});


$si
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','white');
audio.play();
audio.currentTime = 0;
});


$shado
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','black');
audio.play();
audio.currentTime = 0;
});


$share
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','black');
audio.play();
audio.currentTime = 0;
});

$shaso
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','black');
audio.play();
audio.currentTime = 0;
});

$shafa
.mouseover(function(){

	$(this).css('background-color','gray');
	audio_play();

})
.mouseout(function(){
$(this).css('background-color','black');
audio.play();
audio.currentTime = 0;
});
});