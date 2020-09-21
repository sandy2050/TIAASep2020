//Fruit prices are stored in Enum
//enum FruitBasket {Orange=10, Apple=35, Mango=50};
//Fruit names and quantity is stored in  Tuples
//["Apple", 5]  ["Orange", 7], ["Mango", 12]];
//Calculate total price that needs to paid for all fruits
var FruitBasket;
(function (FruitBasket) {
    FruitBasket[FruitBasket["Orange"] = 10] = "Orange";
    FruitBasket[FruitBasket["Apple"] = 35] = "Apple";
    FruitBasket[FruitBasket["Mango"] = 50] = "Mango";
})(FruitBasket || (FruitBasket = {}));
;
var FruitQuantity = [
    ["Apple", 5],
    ["Orange", 7],
    ["Mango", 12]
];
var sum = 0;
FruitQuantity.forEach(function (quantity) {
    if (quantity[0] == "Apple")
        sum = sum + FruitBasket.Apple * quantity[1];
    if (quantity[0] == "Orange")
        sum = sum + FruitBasket.Orange * quantity[1];
    if (quantity[0] == "Mango")
        sum = sum + FruitBasket.Mango * quantity[1];
    //sum = FruitBasket.Orange * quantity[]
});
console.log("Total cost of Fruit Basket is: " + sum);
