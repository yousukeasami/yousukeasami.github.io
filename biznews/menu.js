$(function(){
    var box   = $("#header");
    var boxTop = box.offset().top;

    $(window).scroll(function () {
        if($(window).scrollTop() > boxTop) {
            box.addClass("fixed");
            $("body").css("margin-top","0px");
        } else {
            box.removeClass("fixed");
            $("body").css("margin-top","0px");
        }
    });
});


$(function() {

    $('.showhide').css('display','none');

    $('#menu li').click(function() {
        var tabnum = $('#menu li').index(this);
        $('.content .showhide').css('display','none');
        $('.content .showhide').eq(tabnum).css('display','block');
        $('#menu li').removeClass('active');
        $(this).addClass('active')
    });

    $('#menu>li').tabs({
         fx: { opacity: 'toggle', duration: 'slow'  } 
     });

});








