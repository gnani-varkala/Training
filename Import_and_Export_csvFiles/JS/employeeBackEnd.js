//application starts here
var app = angular.module('employeeApp', []);

//Service to convert JSON to CSV and CSV to JSON
app.service('convertToCsv',function(){
	//function to convert JSON to CSV
	this.convertJsonToCsv = function(array) {
			//empty string where all the JSON's in CSV format is written
            var str = '';
			//for loop to iterator JSON object
            for (var i = 0; i < array.length; i++) {
				//each JSON object is storted into line in a string format seperated with a "," 
                var line = '';
				//for loop to get all the index's in each object  for..in returns index value
                for (var index in array[i]) {
					//if line is not empty then it is concated with a ","
                    if (line != '') {
						line = line + ','
					}
					// line  is concated with value of corresponding key
                    line = line +array[i][index];
                }
				//every line is concated with a string seperated with a new Line
                str = str + line + '\r\n';
            }

            return str;
        }
		
		//function to convert CSV to JSON
		this.convertCsvToJson = function(csv) {
			//splits each new line into a line array
			var lines=csv.split("\n");
			//all the JSON objects are pushed into this array
			var result = [];
			//header array for KEY value
			var headers=['ID','Name','Designation','Experience','Salary']
			//iterators for no.of of lines
			for(var i=0;i<lines.length-1;i++){
				//String array to store all the strings that are seperated by comma
				var obj = {};
				var string=lines[i].split(",");
				//  for loop to push all the Strings as value to corresponding keys
				for(var j=0;j<headers.length;j++){
					obj[headers[j]] = string[j];
				}

				result.push(obj);

			}

			//returns result array
			return result;

        }
});

// Directive to read file
app.directive('fileReader', function() {
	//returns the filecontent into fileContent scope in view
  return {
    scope: {
      fileReader:"="
    },
    link: function(scope, element) {
		//binds the fileConent to element when ever change occurs
       element.bind('change', function(changeEvent) {
        var files = changeEvent.target.files;
        if (files.length) {
		//FileReader constructor invokes
          var r = new FileReader();
		  //whenever file load is completed data is applied  in the fileReader by using $apply 
          r.onload = function(e) {
              var contents = e.target.result;
              scope.$apply(function () {
                scope.fileReader = contents;
              });
          };
          
          r.readAsText(files[0]);
        }
      });
    }
  };
});

//headerCtrl controller is intialized here 
app.controller('headerCtrl',function($scope,$rootScope,convertToCsv){
	//addEmployee div is hidden
	$rootScope.addEmployeePage = false;
	$scope.fileContent ="";
	//whenever addEmployee button is submitted makes addEmployee div visible
	$scope.add_Employee = function(){
		$rootScope.addEmployeePage = true;
	}
	//whenever import button is submitted calls the csv file and converts the csv data into JSON format using fileReader directive and sevice
	$scope.import_Employee = function(){
		$rootScope.addEmployeePage = false;
		$rootScope.EEmployees = convertToCsv.convertCsvToJson($scope.fileContent);
	}
	//whenever export button is submitted JSON data is converted into csv format using service and writes the data into .csv file
	$scope.Export_To_File = function(){
		//service is called here
		var newDataBase = convertToCsv.convertJsonToCsv($rootScope.EEmployees);
		// anchor element 'a' is created
		var save = document.createElement('a');
		//href link is created 
        save.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(newDataBase);
		//file name is intialized to download
        save.download = 'EmployeeList.csv';
		//whenever click event is made anchor tag is called and downloads the file
		save.click();
	}
});

//addEmployeeCtrl controller is intialized here
app.controller('addEmployeeCtrl',function($scope,$rootScope){
	//all the scope variables are intialized here
	$scope.employee_ID="";
	$scope.employee_Name="";
	$scope.employee_Designation = "";
	$scope.employee_Joining_Date = "";
	$scope.employee_Salary = "";
	//EEmployees array is declared to store the employee deatis
	$rootScope.EEmployees=[];
	// when ever save button is submitted this function is called
	$scope.addEmployeeDetails = function(){
		var employee ={};
		employee.ID = $scope.employee_ID;
		employee.Name = $scope.employee_Name;
		employee.Designation = $scope.employee_Designation;
		employee.Experience = $scope.employee_Joining_Date;
		employee.Salary = $scope.employee_Salary;
		//pushes all the employee object into the  EEmployees array
		($rootScope.EEmployees).push(employee);
		$scope.employee_ID = "";
		$scope.employee_Name = "";
		$scope.employee_Designation="";
		$scope.employee_Joining_Date="";
		$scope.employee_Salary="";
	};
	//backbutton to hide addEmployee div
	$scope.backButton= function(){
		$rootScope.addEmployeePage = false;
	}
});

//employeeListCtrl controller is intialized here
app.controller('employeeListCtrl',function($scope,$rootScope){
	$scope.Display=true;
	//deletes the particular employee object which is selected
	$scope.deleteEmployee = function(employee){
		for(var i=0;i<$rootScope.EEmployees.length;i++){
			if($rootScope.EEmployees[i].ID == employee.ID){
				$rootScope.EEmployees.splice(i,1)
				
			}
		}
	}
	//edits the particular employee object which is selected
	$scope.editEmployeeDetails = function(employee){
		$scope.Display = false;
		$scope.employee_ID=employee.ID;
		$scope.employee_Name=employee.Name;
		$scope.employee_Designation = employee.Designation;
		$scope.employee_Joining_Date = employee.employee_Joining_Date;
		$scope.employee_Salary = employee.Salary;
		//saves the edited employee details
		$scope.changeEmployeeDetails= function(){
		console.log(employee);
		for(var i=0;i<$rootScope.EEmployees.length;i++){
			if($rootScope.EEmployees[i].ID == employee.ID){
				$rootScope.EEmployees[i].ID = $scope.employee_ID;
				$rootScope.EEmployees[i].Name = $scope.employee_Name;
				$rootScope.EEmployees[i].Designation = $scope.employee_Designation;
				$rootScope.EEmployees[i].Experience = $scope.employee_Joining_Date;
				$rootScope.EEmployees[i].Salary = $scope.employee_Salary;
				
			}
		}
		$scope.Display = true;
	}
	}
	$scope.backButton= function(){
		$scope.Display = true;
	}
	
	
	
});
