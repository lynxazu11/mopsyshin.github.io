$(document).ready(function(){

});

$("#redot").click(function(){
    var url = "./components/portfolio/redot.html"; 
    $(".wrapper").addClass("inactive");
    setTimeout(function(){
        $("#app").load(url);
    }, 300)
});

$("#08l").click(function(){
    var url = "./components/portfolio/08l.html"; 
    $(".wrapper").addClass("inactive");
    setTimeout(function(){
        $("#app").load(url);
    }, 300)
});

$("#mosher").click(function(){
    var url = "./components/portfolio/mosher.html"; 
    $("body").load(url);
});

$("#bbuzzart").click(function(){
    var url = "./components/portfolio/bbuzzart.html"; 
    $("body").load(url);
});

$("#caricature").click(function(){
    var url = "./components/portfolio/caricature.html"; 
    $("body").load(url);
});

$("#anno").click(function(){
    var url = "./components/portfolio/anno.html"; 
    $("body").load(url);
});

$("#player").click(function(){
    var url = "./components/portfolio/player.html"; 
    $("body").load(url);
});

$("#profile-list").click(function(){
    var url = "./components/portfolio/profile-list.html"; 
    $("body").load(url);
});

$("#emergency").click(function(){
    var url = "./components/portfolio/emergency.html"; 
    $("body").load(url);
});

$("#republic").click(function(){
    var url = "./components/portfolio/republic.html"; 
    $("body").load(url);
});