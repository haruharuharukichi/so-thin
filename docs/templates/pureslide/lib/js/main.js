$(function() {
  var nav = $('#navbar'),
  top = $('#header').outerHeight(true);
  $(window).on("scroll",function () {
   if($(window).scrollTop() > top) {
     nav.addClass('fixed');
   } else {
     nav.removeClass('fixed');
   }
  });
  $('#navbarToggler').on('click',function(){
      $(this).toggleClass('active');
  });
   $(function(){
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed:5000,
        dots : true
      });
    });
  // フェードインしながら左へスライド    
  $('.Inview').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('Viewing');
    }
  });
});