
$(document).ready(function(){
	
// Header shrinks on scroll
	$(window).scroll(function() {
  		if ($(document).scrollTop() > 25) {
    		$('.navbar').addClass('navbar-inverse');
  		} else {
    		$('.navbar').removeClass('navbar-inverse');
  		}
	});


// Tooltip shows up on hover
	$('[data-toggle="tooltip"]').tooltip(); 


// show and hide card title on hover
	$('.card-test').mouseover(function() {
	  $('.card-title-test').css("visibility","visible");
	});

	$('.card-test').mouseout(function() {
	  $('.card-title-test').css("visibility","hidden");
	});



});







// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
// function isRetina() {
// 	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
// 					  (min--moz-device-pixel-ratio: 1.5),\
// 					  (-o-min-device-pixel-ratio: 3/2),\
// 					  (min-resolution: 1.5dppx)";
 
// 	if (window.devicePixelRatio > 1)
// 		return true;
 
// 	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
// 		return true;
 
// 	return false;
// };
 
 
// function retina() {
	
// 	if (!isRetina())
// 		return;
	
// 	$("img.2x").map(function(i, image) {
		
// 		var path = $(image).attr("src");
		
// 		path = path.replace(".png", "@2x.png");
// 		path = path.replace(".jpg", "@2x.jpg");
		
// 		$(image).attr("src", path);
// 	});
// };
 
// $(document).ready(retina);

