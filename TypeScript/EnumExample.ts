enum Color {Red, Green, Blue};

console.log(Color)

let c:Color;

c = Color.Green;
console.log(c)

var d = Color[1]
console.log(d)

enum Fruit {Orange = 1, Apple = 45, Mango}
console.log(Fruit[1]);
console.log(Fruit[45]);
console.log(Fruit[46]);