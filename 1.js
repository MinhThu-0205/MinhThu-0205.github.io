 $(function(){
 	$('.xuong, .kn').click(function(event) {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:$('#khoiedu').offset().top}, 400);
 	});
 	$('.sp').click(function(event) {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:$('#khoisp').offset().top}, 400);
 	});
 	$('.cm').click(function(event) {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:$('#khoicm').offset().top}, 400);
 	});
})  
 