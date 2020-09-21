"use strict";
var ArraySumExample;
(function (ArraySumExample) {
    var myArray = [10, 20, 30, 40];
    var sum = 0;
    for (var index_1 = 0; index_1 < myArray.length; index_1++) {
        sum = sum + myArray[index_1];
    }
    console.log(sum);
})(ArraySumExample || (ArraySumExample = {}));
