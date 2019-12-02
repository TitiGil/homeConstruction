$(document).ready(function(){
   // $('[data-toggle="tooltip"]').tooltip(); 
var but=document.getElementById("colbut");
but.addEventListener("click",menu);
var b=$(".colnav");
var sh=false;

document.getElementsByTagName("body")[0].addEventListener("click",function(e){
    if(sh && e.clientY>200){
       hidden();
       
    }
    
});
$(".colnav .nav-link").on("click",function(){
    hidden();
});
function menu(){
if(!sh) {show();}
else {hidden();}
}
function show(){
    console.log("show");
    b.css({"top":"50px"});
    sh=true;

}

function hidden(){
    console.log("hid");
    b.css({"top":"-100px"});
    sh=false;
}




});

function add(
){
$("#mapframe").attr("src","https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d6478.45358600903!2d51.332884787327345!3d35.72064049764821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x0%3A0xcc3c7de500d5e174!3m2!1d35.7216307!2d51.3362145!4m5!1s0x3f8dfda28e750467%3A0xcc3c7de500d5e174!2zVGVocmFuIFByb3ZpbmNlLCBUZWhyYW4sIDJuZCBTYWRlZ2hpeWVoIFNxdWFyZSwgTm8uIDUxMSwg2KrYudmF24zYsdqp2KfYsdin2YYg2KrZh9ix2KfZhiwgSXJhbg!3m2!1d35.7216307!2d51.3362145!5e0!3m2!1sen!2s!4v1574677558815!5m2!1sen!2s\"");



}


$(function(){
    var $window = $(window);

var $elem = $("#text");


    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $("#constructor").addClass("animate");
        $("#text").addClass("animate");
   
    }

})
}


);



