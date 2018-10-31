$(document).ready(function() {
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        nav: false,
        loop: true,
        margin: 10,
        items: 1,
    });
    $("#carousel_prev").click(function () {
        owl.trigger("prev.owl.carousel");
    });
    $("#carousel_next").click(function () {
        owl.trigger("next.owl.carousel");
    });
});
