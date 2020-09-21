"use strict";
function addition(x, y) {
    return x + y;
}
console.log(addition(20, 30));
var result = addition(10, 20);
console.log(result);
var anonymous = function (a, b) {
    return a - b;
};
console.log(anonymous(10, 5));
//Function with Optional Parameters
function buildName(firstname, lastname) {
    if (lastname)
        return "Hello " + firstname + " " + lastname;
    return "Hello " + firstname;
}
console.log(buildName("John", "Smith"));
console.log(buildName("John"));
//Function with Default Parameters
function buildFullName(firstname, lastname) {
    if (lastname === void 0) { lastname = "Smith"; }
    if (lastname)
        return "Hello " + firstname + " " + lastname;
    return "Hello " + firstname;
}
console.log(buildFullName("John", "Smith"));
console.log(buildFullName("John"));
//Function with Rest parameters
function buildLongName(firstname) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return "Hello " + firstname + " " + restOfName.join(" ");
}
console.log(buildLongName("John", "Smith"));
console.log(buildLongName("John"));
console.log(buildLongName("John", "Smith", "Joseph", "Samuel"));
//Arrow Expression - Fat Arrow - Lambda Function
var product = function (x, y) {
    return x * y;
};
console.log(product(2, 3));
//Arrow Expression without Parameters
var display = function () {
    console.log("Hello World");
};
//console.log(display());
display();
//Function with single line code
var add = function (x, y) { return x + y; };
console.log(add(3, 4));
