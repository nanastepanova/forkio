$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        nav:true,
        loop: true,
        margin: 10,
        items: 1,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        /*
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
            }
        }*/
    })
});
