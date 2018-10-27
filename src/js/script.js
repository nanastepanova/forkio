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
