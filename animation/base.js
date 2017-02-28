$(document).ready(function(){

  $(".btn").click(function(){
    if ($(".side-nav").hasClass("nav-open")) {
      $(".side-nav").removeClass("nav-open").addClass("nav-close")
      $(".btn2").removeClass("play").addClass("playpre")
      $(".btn1").removeClass("pausepre").addClass("pause")
      $(".album").addClass("album-play").removeClass("album-pause")
    } else {
      $(".side-nav").addClass("nav-open").removeClass("nav-close")
      $(".btn2").addClass("play").removeClass("playpre")
      $(".btn1").addClass("pausepre").removeClass("pause")
      $(".album").addClass("album-pause").removeClass("album-play")

    }
  });
});
