

/***********************************/
/* Sidebar Slide in on top */
/**********************************/
$('.navigation__main').children().clone().appendTo('.responsive-standalone');
$('.open-menu').on('click', function (event) {
    event.preventDefault();
    $('body').addClass('noscroll');
    $('.responsive-standalone').addClass('navigation-active');
    $(".responsive-standalone-overlay").animate({
        "opacity": "toggle"
    }, {
        duration: 500
    }, function () {
        $(".responsive-standalone-overlay").fadeIn();
    });
    return false;
});
$('.responsive-standalone-close').on('click', function (event) {
    event.preventDefault();
    $('body').removeClass('noscroll');
    $('.responsive-standalone').removeClass('navigation-active');
    $(".responsive-standalone-overlay").hide();
    return false;
});
$(".responsive-standalone-overlay").on('click', function () {
    $('.responsive-standalone').removeClass('navigation-active');
    $(".responsive-standalone-overlay").hide();
    $('body').removeClass('noscroll');
});
$('.responsive-standalone li.dropdown').on('click', function() {
    $(this).addClass('active').children('.sub-menu').slideToggle();
});
/***********************************/
/* card favourite toggle class */
/**********************************/

$(".card__view-content .favorite").on('click', function() {
    $(this).parents('.card__view-content').toggleClass('active');
});

$(".search-section input").on('focus', function() {
    $(this).closest(".input-group").addClass("active");
});
$('.search-section input').on('blur', function() {
    if( !$(this).val() ) {
           $(this).closest(".input-group").removeClass("active");
    }
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});