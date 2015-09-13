$(document).ready(function(){

	$('.navMenu > li').click(function(){
		if($(this).children('ul').css('visibility') === 'hidden'){
			$(this).children('ul').css('visibility', 'visible');
		}
		else{
			$(this).children('ul').css('visibility', 'hidden')
		}
	});
});