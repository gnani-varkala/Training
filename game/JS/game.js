$(document).ready(function(){
		$(".div_1").bind('click',function(){
			var clicked = this;

			var player_1 = $(".right_div").hasClass("active");

			var player_2 = $(".left_div").hasClass("active");

			if(player_1 == true && player_2 == false){

				$(".right_div").removeClass("active");
				$(".left_div").addClass("active");
				$(clicked).empty();
				$(clicked).addClass("mainDiv_1");
				$(clicked).append("<button class='buttonStyle'>*</button>");
			}
			if(player_1 ==false  && player_2 == true){

					$(".right_div").addClass("active");
					$(".left_div").removeClass("active");
					$(clicked).empty();
					$(clicked).addClass("mainDiv_2");
					$(clicked).append("<button class='buttonStyle'>#</button>");
				}
			$(clicked).unbind('click');
		});

});
