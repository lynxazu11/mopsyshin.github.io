$(document).ready(function(){
  // IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
  // if (IS_IPAD) {
  //   $(".detail .content").css({
  //     height: "660"
  //   });
  // };

  $("#home").animate({
    opacity: 1,
    top: 0
  }, 800, 'swing');


  $(".wrapper").animate({
    opacity: 1,
    left: 0
  }, 800,'swing', function(){
    $("#profile-textbox").animate({
      opacity: 1,
      top: 0
    }, 200, 'swing');
    $("#detail-content").animate({
       opacity: 1,
       left: 0
     }, 200, 'swing'
    );
    $("#link-fb, #link-brunch").animate({
      opacity: 1,
      bottom: 0
    }, 200, 'swing');
  });



  $("#home").click(function(){
    $(location).attr('href', './index.html');
  });

  $("#link-fb").click(function(){
    window.open('https://www.facebook.com/mopsyshin', '_blank');
  });

  $("#link-brunch").click(function(){
    window.open('https://brunch.co.kr/@mopsyshin', '_blank');
  });


});
