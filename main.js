
	var images = ['Stream', 'Snow', 'RainMetal', 'Rain', 'LightRain','HotTub', 'Fire','Driving', 'Clock', 'City', 'Birds', 'Airplane'];
$(document).ready(function(){//    starts when page is loaded and ready
    setTimeout(function() {
		var scene = images[getRandomInt(0, images.length-1)];
		var shellImage = "shells/" + scene  + ".png"
		var imageToShow = "backgrounds/" + scene + ".jpg";
        $("#bg").css('background-image','url('+imageToShow+')').animate({opacity: 1});
		$("#shell").attr('src',shellImage).animate({opacity: 1});
        changeBackground();
    }, 100);    //    20 second timer
	
});
function changeBackground()
{
	setTimeout(function() {
	var scene = images[getRandomInt(0, images.length-1)];
	var shellImage = "shells/" + scene  + ".png"
	var imageToShow = "backgrounds/" + scene  + ".jpg";
    $("#bg").css('background-image','url('+imageToShow+')').animate({opacity: 1});
		
	$("#shell").attr('src',shellImage).animate({opacity: 1});
	changeBackground();
    }, 20000); 
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}