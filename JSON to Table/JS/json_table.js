$(document).ready(function(){
	 /*var Employees= [
	{
      "ID": "30024",
      "Name": "NagaLatha",
      "Designation": "Trainee",
      "Experience": "5Days",
      "Salary": 20000
    },
    {
      "ID": "30025",
      "Name": "Santoshi",
      "Designation": "Trainee",
      "Experience": "5Days",
      "Salary": 20000
    }
  ];*/
		var Employees = [];
		$.ajax({url: "JSON/details.json", success: function(result){
			Employees = result;
			console.log(result);
       
		console.log(Employees);
		
		$("#test").html($("<tbody></tbody>"))
		var table = $("#test").children()[0];
		$(table).append($("<tr></tr>"));
		var header = $(table).children()[0];
			for(var index in Employees[0]){
				$(header).append("<th>"+index+"</th>");
			}
			//appending array elements to DOM
			for(var i=0;i<Employees.length;i++){
				var tr = $("<tr></tr>")
				for(var index in Employees[i]){
					$(tr).append("<td>"+Employees[i][index]+"</td>");
				}
					$(table).append(tr);
			}
		// }});
});