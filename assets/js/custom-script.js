$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').removeClass('navbar-transparent');
        $('nav').addClass('navbar-solid');
    } else {
        $('nav').addClass('navbar-transparent');
        $('nav').removeClass('navbar-solid');
    }
});