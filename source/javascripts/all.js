//= require_tree .
$(document).ready(function(){


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    var rubyIcon = $('.js-ruby-icon');

    var sectionTop = $('.js-signet-arrow-top');
    var sectionBottom = $('.js-signet-arrow-bottom');

    var pointTop = sectionTop.offset().top - sectionTop.height();
    var pointBottom = sectionBottom.offset().top - sectionBottom.height();

    console.log(wScroll);
    if (wScroll <= pointTop) {
      rubyIcon
      .addClass('static-top');
    } else if (wScroll > pointTop && wScroll < pointBottom) {
      rubyIcon
      .removeClass('static-top')
      .removeClass('static-bottom')
      .addClass('fixed');
    }
    else if (wScroll >= pointBottom) {
      rubyIcon
      .removeClass('fixed')
      .addClass('static-bottom');
    }
  });

});
