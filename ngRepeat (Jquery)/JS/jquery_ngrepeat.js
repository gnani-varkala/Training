$(document).ready(function(){
		//intial array
		var array = ["a","b","c"];
		//array to get values from dom
		
		var html_arr=[];
		//appending array elements to DOM
		for(var i=0;i<array.length;i++){
        $("#test").append(array[i]+"<br>");
		}
		//function to check for repetion
		function checkForRepetion(){
			//spliting DOM values and pushing into an array
			html_arr = ($("#test").html()).split("<br>");
			//if 1st element from dom and array is not equal then dom is made empty
			for(var j=0;j<(html_arr.length);j++){
				if(array[j] != html_arr[j]){
					$("#test").empty();
				}
			}
			//checks for repition
			for(var i=0;i<array.length;i++){
				$("#test").append(array[i]+"<br>");
			}
			
		}
		//executes the checkForRepetion() for every 3seconds
		setInterval(function() {
			checkForRepetion();
		}, 3000);
		
		//after 2 seconds new_array is pushed into the intial array
		/*setTimeout(function(){
		var new_arr = ["d","e"];
		for(var i=0;i<new_arr.length;i++){
			array.push(new_arr[i]);
		};
		}, 2000);*/
		
		$("button").click(function(){
			var value = prompt("Please enter some element");
			if (value != null) {
					array.push(value);
			}
		});
		
		//after 10seconds array values are changed
		setTimeout(function(){
			array =["a","y","z"];
		}, 10000);
		
});