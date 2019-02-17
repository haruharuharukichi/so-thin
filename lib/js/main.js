jQuery(document).ready(function($) {
  $(function() {
   $('#navbarToggler').on('click',function(){
    $(this).toggleClass('active');
  });
   $('.scrollTop').on('click',function(){
    $("html,body").animate({scrollTop:$('#header').offset().top});
  });
   $('.scrollBody').on('click',function(){
    $("html,body").animate({scrollTop:$('#main').offset().top});
  });
    //TOC
    $('#toc').toc({
      'selectors': 'main h2,main h3,main h4', //目次として表示する要素のCSSセレクターを指定
      'anchorName': function(i, heading, prefix) { //アンカーネームのカスタマイズ
        return prefix+i;
      },
    });
     // フェードインしながら上へスライド    
     $('.inviewfadeInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).addClass('fadeInUp');
      } else {
        $(this).removeClass('fadeInUp');
      }
    });
     // フェードインしながら左へスライド    
     $('.inviewfadeInLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).addClass('fadeInLeft');
      } else {
        $(this).removeClass('fadeInLeft');
      }
    });
    // フェードインしながら右へスライド    
    $('.inviewfadeInRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).addClass('fadeInRight');
      } else {
        $(this).removeClass('fadeInRight');
      }
    });
  });
});