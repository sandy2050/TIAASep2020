var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color);
var c;
c = Color.Green;
console.log(c);
var d = Color[1];
console.log(d);
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Orange"] = 1] = "Orange";
    Fruit[Fruit["Apple"] = 45] = "Apple";
    Fruit[Fruit["Mango"] = 46] = "Mango";
})(Fruit || (Fruit = {}));
console.log(Fruit[1]);
console.log(Fruit[45]);
console.log(Fruit[46]);
