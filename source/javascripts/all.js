//= require_tree .
$(document).ready(function(){


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    var rubyIcon = $('.js-ruby-icon');

    var sectionTop = $('.heading');
    var sectionBottom = $('.section-info');

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
