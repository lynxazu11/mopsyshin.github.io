$(document).ready(function(){
    portfolioFunc();
})

function pageReverse( id ) {
    var btn = "#" + id ;
    var url =  "./components/portfolio/" + id + ".html";
    $(btn).click(function(){
        $(".wrapper").addClass("inactive");
        setTimeout(function(){
            $("#app").load(url);
        }, 300);
    });
}

function portfolioFunc() {
    var itemLength = $(".item-portfolio").length;
    for ( var i=0; i<itemLength; i++ ) {
        var id = $('.item-portfolio')[i].id;
        pageReverse( id );        
    }
}

