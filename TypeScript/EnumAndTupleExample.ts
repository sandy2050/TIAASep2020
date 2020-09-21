//Fruit prices are stored in Enum
//enum FruitBasket {Orange=10, Apple=35, Mango=50};

//Fruit names and quantity is stored in  Tuples
//["Apple", 5]  ["Orange", 7], ["Mango", 12]];

//Calculate total price that needs to paid for all fruits

enum FruitBasket {Orange=10, Apple=35, Mango=50};

let FruitQuantity:Array<[String,number]> = [
                                                ["Apple", 5],
                                                ["Orange", 7],
                                                ["Mango", 12]
                                           ];

let sum:number = 0;
FruitQuantity.forEach(quantity => { 
    if(quantity[0]=="Apple") sum = sum + FruitBasket.Apple * quantity[1];
    if(quantity[0]=="Orange") sum = sum + FruitBasket.Orange * quantity[1];
    if(quantity[0]=="Mango") sum = sum + FruitBasket.Mango * quantity[1];
   //sum = FruitBasket.Orange * quantity[]
});

console.log("Total cost of Fruit Basket is: "+sum);