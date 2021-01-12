/*You are to create a collection of employee's information for your company. Each employee has the following attributes:
Name
Job title
Salary
Status
First, you will create an array named employees.
Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".
This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")
You will then:
Instantiate three employees
Override the status attribute of one of them to either "Part Time" or "Contract"
Call the printEmployeeForm method for each employee
Put the generated employees into the employees array using whichever method you prefer.*/



// First way. run it in the Terminal use the node+file name which is (index.js) then hit enter
/*let employees = []
function Employee(Name, Jobtitle, Salary, Status = "Full-Time"){
    this.Name = Name;
    this.Jobtitle = Jobtitle;
    this.Salary = Salary;
    this.Status = Status;
    employees.push(this)
}
function workers(employee){
    console.log(employee.name + employee.Jobtitle + employee.Salary + employee.Status)
}
var printEmployeeForm1 = new Employee('Derek Jeter', 'Shortstop', '$25,000,000/year');
var printEmployeeForm1 = new Employee('Steve Jobs', 'Bat Boy', '$15/hour', 'Part Time');
var printEmployeeForm1 = new Employee('Roger Clemons', 'Pitcher', '$30,000,000/year');
console.log(employees);*/


// Second way using the prototype.(use the debugging console)
let employees = []
function Employee(Name, Jobtitle, Salary, Status = "Full-Time"){
    this.Name = Name;
    this.Jobtitle = Jobtitle;
    this.Salary = Salary;
    this.Status = Status;
    employees.push(this)
}

Employee.prototype.printDetails = function(){
    console.log("Name: "+ this.Name);
    console.log("Jobtitle: "+ this.Jobtitle);
    console.log("Salary: "+ this.Salary);
    console.log("Status: "+ this.Status);
    console.log("-------------------------")
} 
var firstEmployee = new Employee("Mike Saleh", "Programmer", "70,000.00")
firstEmployee.printDetails();
var secondEmployee = new Employee("Mustafa Saleh", "Doctor", "150,000.00")
secondEmployee.printDetails();
var thirdEmployee = new Employee("Mike Mustafa", "Driver", "40,000.00", "Part Time")
thirdEmployee.printDetails();
// you can add the next step to see the the actuall array (remove it and see the deffirances)
console.log(employees);



// Third way is used functions. (use Terminal and Debugging console)
/*let employees = []
function Employee(Name, Jobtitle, Salary, Status = "Full-Time"){
    this.Name = Name;
    this.Jobtitle = Jobtitle;
    this.Salary = Salary;
    this.Status = Status;
    employees.push(this)
    this.printDetails = function(){
       console.log("Name: "+ this.Name);
       console.log("Jobtitle: "+ this.Jobtitle);
       console.log("Salary: "+ this.Salary);
       console.log("Status: "+ this.Status);
       console.log("-------------------------")
    }
} 
var firstEmployee = new Employee("Mike Saleh", "Programmer", "70,000.00")
firstEmployee.printDetails();
var secondEmployee = new Employee("Mustafa Saleh", "Doctor", "150,000.00")
secondEmployee.printDetails();
var thirdEmployee = new Employee("Mike Mustafa", "Driver", "40,000.00", "Part Time")
thirdEmployee.printDetails();
// you can add the next step to see the the actuall array (remove it and see the deffirances)
console.log(employees); */