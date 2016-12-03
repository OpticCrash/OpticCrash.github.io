/**
 * Created by Ivan on 02.12.2016.
 */
$(document).ready(function() {
    var numSlidesToShow = 3;
    var hasArrows = true;
    var hasDots = false;

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        asNavFor: '.slider-for',
        arrows: hasArrows,
        dots: hasDots,
        slidesToShow: numSlidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    });
});
