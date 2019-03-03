$(function() {
  var nav = $('#globalNavi'),
  top = $('#header').outerHeight(true);
  $(window).on("scroll",function () {
   if($(window).scrollTop() > top) {
     nav.addClass('fixed');
   } else {
     nav.removeClass('fixed');
   }
  });
  $('.carousel').carousel({
    interval: 5000
  })
  // フェードインしながら左へスライド    
  $('.Inview').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('Viewing');
    }
  });
});