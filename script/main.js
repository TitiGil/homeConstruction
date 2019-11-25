// function activing(obj) {

//     var a = $(".nav-item").removeClass("active");
//     obj.classList.add("active");
// }

window.addEventListener("scroll", scrolling());

// var mouseevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
// window.addEventListener(mouseevt, scrolling);

function scrolling(e) {


    console.log($('.bod').offset().top);
    //     var evt = window.event || e;
    //     var kind = evt.detail || evt.wheelDelta * (-1);
    //     kind < 0 ? $(".header").slideDown() : $(".header").slideUp();
}


var colbut = document.getElementById("colbut");

colbut.addEventListener(onclick, () => {
    console.log("click");

});