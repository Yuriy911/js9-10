$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$(function () {
    $("#country_id").selectbox();
});

(function($) {
    $(function() {
        $('.checkbox__jquery input').styler();
    });
})(jQuery);

function mainmenu(){
    $(' #nav ul ').css({display: 'none'});
    $(" #nav li").hover(function(){
        $(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
    },function(){
        $(this).find('ul:first').css({visibility: "hidden"});
    });
}

$(document).ready(function(){
    mainmenu();
});



$(" #nav a").removeAttr("title");







































