

$(function(){
			$("#title").click(function(){
				var speed = 500;
				//var target = $(this.hash);
				var position = $("html").offset().top;
				$("html, body").animate({scrollTop:position}, speed, "swing");
				return false;
			});


    		$('a', '#menu').mouseover(function(){  
        		//画像の位置を取得
        		$width=$(this).width();
        		$position=$(this).position().left

       			   $('#underline', '#menu').animate({
				         
				         width: $width +20+'px',
				         left: $position -10+'px'},
				         'fast');
			});

			$('#sidebar li').mouseover(function(){  
        		
       			   $(this).animate({
				         
				         backgroundColor:"#F8F8FF"},
				         'fast');
			});

			$('#sidebar li').mouseout(function(){  
        		
       			   $(this).animate({
				         
				         backgroundColor:"#fff"},
				         'fast');
			});


			$('#feed li').mouseover(function(){  
        		
       			   $(this).animate({
				         
				         backgroundColor:"#F8F8FF"},
				         'fast');
			});

			$('#feed li').mouseout(function(){  
        		
       			   $(this).animate({
				         
				         backgroundColor:"#fff"},
				         'fast');
			});



//モーダルウィンドウを出現させるクリックイベント
$("a").click( function(){

	//キーボード操作などにより、オーバーレイが多重起動するのを防止する
	$( this ).blur() ;	//ボタンからフォーカスを外す
	//if( $( "#sidebar" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
	//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

	//オーバーレイを出現させる
	$( "body" ).append( '<div id="modal-overlay"><div id="modal-display"></div></div>' ) ;
	$( "#modal-overlay" ).fadeIn( "slow" ) ;

	//サイドバーの内容を入れる
 	$modal=$("#sidebar").html();
	$("#modal-display").html($modal);

	$('#modal-display li').attr('id', "modal_id");

	//コンテンツをフェードインする
	$( "#sidebar" ).fadeIn( "slow" ) ;

	//[#modal-overlay]、または[#modal-close]をクリックしたら…
	$( "#modal-overlay" ).unbind().click( function(){

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$( "#modal-overlay" ).fadeOut( "slow" , function(){

			//[#modal-overlay]を削除する
			$('#modal-overlay').remove() ;

		} ) ;

	} ) ;

} ) ;

//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
		var cw = $( "#feed li" ).outerWidth();
		var ch = $( "#feed li" ).outerHeight();

		//センタリングを実行する
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}

		
		});



