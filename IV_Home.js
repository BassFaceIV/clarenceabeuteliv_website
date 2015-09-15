$(document).ready(function(){

	$('.navDropdownMenuLabel').click(function(e){
		e.stopPropagation();
		for(i = 1; i < 6; i++){
			if($(this).siblings('div').attr('id') !== ('navDropdownMenu' + i)){
				$('#navDropdownMenu' + i).slideUp(200);
			}
			else{
				$(this).siblings('div').slideToggle(200);
			}
		}
	});

	$('html').click(function(){
		for(i = 1; i < 6; i++){
			$('#navDropdownMenu' + i).slideUp(200);
		}
	});
});