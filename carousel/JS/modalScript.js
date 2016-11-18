$(document).ready(function(){
	$("#buttonClass").click(function() {
		editid = "\""+$(this).attr("data-target")+"\"";
		console.log(this);
		console.log(editid);
		var url = $(".cartoonVideo").attr('src');

		$(editid).on('hide.bs.modal', function(){
			$(".cartoonVideo").attr('src', '');
		});

		$(editid).on('show.bs.modal', function(){
			$(".cartoonVideo").attr('src', url);
		});
	});
	/*$("#myModal").on('hide.bs.modal', function(){
        $(".cartoonVideo").attr('src', '');
    });

    $("#myModal").on('show.bs.modal', function(){
        $(".cartoonVideo").attr('src', url);
    });*/
    
});