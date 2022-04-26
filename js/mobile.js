$(document).ready(function(){
    $('#hamburger').click(function(){
        $('.nav-grid').css("z-index","100");
        $('.container').fadeIn();
        $('.container').animate({height: '100vh', opacity: '100'}, "slow");
        $('#hamburger').css("visibility","hidden");
        $('.dropdown-content').empty();
    });
    $('#hamburger-close').click(function(){
        $('.nav-grid').css("z-index","1");
        $('.container').animate({height: '0', opacity: '0',}, "slow",function(){
            $('.container').fadeOut();})
        $('#hamburger').css("visibility","visible");

    });
})