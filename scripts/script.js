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


function hover() {
  $(".button").on("mouseenter", function() {
    return $(this).addClass("hover");
  });
}

function hoverOff() {
  $(".button").on("mouseleave", function() {
    return $(this).removeClass("hover");
  });
}

function active() {
  $(".button").on("click", function() {
    return $(this).addClass("active");
  });
}

hover();
hoverOff();
active();







// End of Your Code . Don't delete that line below!!
});