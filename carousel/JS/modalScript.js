$(document).ready(function(){
	$(".container").click(function() {
		var editid = $(this).find("iframe");
		var url = $(editid).attr('src')+"?autoplay=1";
		var myId = $($(this).find("button")).attr('data-target');
		$(myId).on('hide.bs.modal', function(e){
			$(".cartoonVideo").attr('src', '');
		});

		$(myId).on('show.bs.modal', function(e){
			$(".cartoonVideo").attr('src', url);
		});
	});


});
