var bdy = document.querySelector("body");
var crsr = document.querySelector(".cursor");

bdy.addEventListener("mousemove", function(e) {
    // console.log(e);
    crsr.style.left = e.x+"px";
    crsr.style.top = e.y+"px";
});