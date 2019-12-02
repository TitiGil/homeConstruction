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