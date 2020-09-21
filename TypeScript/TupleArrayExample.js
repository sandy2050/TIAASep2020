var employees;
employees = [
    ["John", 9922334455],
    ["Cathy", 9887293822],
    ["Stacie", 9781224498]
];
console.log(employees);
var searchstring = "Stacie";
for (var index = 0; index < employees.length; index++) {
    console.log(employees[index][0]);
    if (employees[index][0] == searchstring) {
        console.log(searchstring + "'s number is: " + employees[index][1]);
    }
}
searchstring = "Cathy";
//find number of Cathy
employees.forEach(function (element) {
    if (element[0] == searchstring) {
        console.log(searchstring + "'s number is: " + element[1]);
    }
});
