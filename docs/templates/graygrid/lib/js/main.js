jQuery(function($){
  $(function() {
    var nav = $('#globalNavi'),
    offset = nav.offset();
    $(window).on("scroll",function () {
     if($(window).scrollTop() > offset.top) {
       nav.removeClass('container').addClass('fixed');
     } else {
       nav.removeClass('fixed').addClass('container');
     }
     if($(window).scrollTop() > offset.top) {
       $('#footerScroller').addClass('inview');
     } else {
       $('#footerScroller').removeClass('inview');
     }
   });
    $('#navbarToggler').click(function() {
      $(this).toggleClass('active');
    });
    $('.scrollTop').on('click',function(){
      $("html,body").animate({scrollTop:$('#header').offset().top});
    });
    $('.scrollBody').on('click',function(){
      $("html,body").animate({scrollTop:$('#main').offset().top});
    });
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').on('click',function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // 移動先を取得
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
     // フェードインしながら上へスライド    
     $('.inviewContent').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).addClass('inview');
      } else {
        $(this).removeClass('inview');
      }
    });
     //カレンダーをスライドショーに
     $(function(){
        $('.main_calender').slick({
          accessibility: true,
          autoplay: false,
          dots: true,
          fade: true,
          slidesToShow: 1,
          adaptiveHeight: true
        });
      });
   });
});
