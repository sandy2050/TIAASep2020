"use strict";
var employees;
employees = [
    ["John", 9922334455],
    ["Cathy", 9887293822],
    ["Stacie", 9781224498]
];
console.log(employees);
//find number of Stacie
var searchstring = "Stacie";
for (var index_1 = 0; index_1 < employees.length; index_1++) {
    console.log(employees[index_1][0]);
    if (employees[index_1][0] == searchstring) {
        console.log(searchstring + "'s number is: " + employees[index_1][1]);
        break;
    }
}
//find number of Cathy
searchstring = "Cathy";
employees.forEach(function (element) {
    if (element[0] == searchstring) {
        console.log(searchstring + "'s number is: " + element[1]);
    }
});
