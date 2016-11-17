$(document).ready(function(){
	/*	var Employees= [
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
		$("#test").append('<table class="table">');
		$("#test").append("<thead><tr>");
			for(var index in Employees[0]){
				$("#test").append("<th>"+index+"</th>");
			}
				$("#test").append("</tr></thead>");
			//appending array elements to DOM
			for(var i=0;i<Employees.length;i++){
					$("#test").append("<tr>");
	        $("#test").append("<td>"+Employees[i].ID+"</td>");
					$("#test").append("<td>"+Employees[i].Name+"</td>");
					$("#test").append("<td>"+Employees[i].Designation+"</td>");
					$("#test").append("<td>"+Employees[i].Experience+"</td>");
					$("#test").append("<td>"+Employees[i].Salary+"</td>");
					$("#test").append("</tr>");
			}
			//function to check for repetion
			$("#test").append("</table>"); 
		 }});
});