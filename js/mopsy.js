$(document).ready(function(){


  $("#home").animate({
    opacity: 1,
    top: 0
  }, 1000, 'easeOutCirc');


  $(".wrapper").animate({
    opacity: 1,
    left: 0
  }, 1000,'easeOutCirc', function(){
    $("#profile-textbox").animate({
      opacity: 1,
      top: 0
    }, 600, 'swing', function(){
      $("#detail-content").animate({
        opacity: 1,
        left: 0
      }, 600, 'swing', function(){
        $("#link-fb").animate({
          opacity: 1,
          bottom: 0
        }, 600, 'swing');
      });
    });
  });

  $("#home").click(function(){
    $(location).attr('href', './index.html');
  });

  $("#link-fb").click(function(){
    window.open('https://www.facebook.com/mopsyshin', '_blank');
  });



});
