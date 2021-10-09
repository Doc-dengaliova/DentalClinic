// popup-covid
var delay_popupCovid = 5000;
setTimeout("document.getElementById('bg_popup-covid').style.display='block'", delay_popupCovid);
 
//jquery
jQuery(document).ready(function () {
    // slider connection
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: 1000
    });
});
