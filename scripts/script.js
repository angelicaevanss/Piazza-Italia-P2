// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
'use strict'

  function toggleIcon () {
  	$('.icon').on('click', function(){
  		$('.icon').toggleClass('active');
  		$('.menu-mobile').slideToggle(300);
  	})
  }

    function closeMobileMenu (){
  		$('.menu-mobile').on('click', 'a', function(){
  			$('.icon').trigger('click');
  		})
  }

  function desktopMenu() {
  		$(window).scroll(function(){
  			if ($(this).scrollTop() > 50 && $(window).width() >
  				$('header.desktop').fadeIn(500);
  			} else {
  				$('header.desktop').fadeOut(500);
  			}
  		})
  }
















// End of Your Code . Don't delete that line below!!
});