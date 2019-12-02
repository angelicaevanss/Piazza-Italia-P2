// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
'use strict'
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(window).scroll(function(){
    $(".arrow-down").css("opacity", 1 - $(window).scrollTop() / 250);
  });














// End of Your Code . Don't delete that line below!!
});