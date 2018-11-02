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

$(document).ready(function () {
  $(".menu").click(function(){
    $($('.menu__list')[0]).toggleClass('none');
    $($('.menu_btn')).toggleClass('close-menu')
  });
  // $('.pricing__section').click(function () {
  //     $($('.pricing__section')).toggleClass('active');
  // });
});





$(function ourServices() {
  $(".pricing__section").click(function () {
    let tabs = $(".pricing__section");

    // Удаляем классы active
    tabs.removeClass("active");

    // Добавляем классы active
    $(this).addClass("active");
    return false;
  });
});
