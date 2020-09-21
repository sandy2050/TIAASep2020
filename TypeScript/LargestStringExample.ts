"use strict";

var strArr = ["FirstStr", "SecondString", "Third"];
var longestString:string = "";

for (var index = 0; index < strArr.length; index++) {
    if (longestString.length < strArr[index].length) {
        longestString = strArr[index];
    }
}
console.log("Longest String is: " + longestString);