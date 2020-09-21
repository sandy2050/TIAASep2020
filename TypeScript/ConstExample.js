var numLivesOfCat = 9;
//numLivesOfCat = 7;
var kitty = {
    name: "Aurora",
    numLives: numLivesOfCat
};
//kitty = {
//    name: "Danielle",
//    numLives: 8
//};
console.log(kitty);
kitty.name = "Tom";
console.log(kitty);
console.log(kitty.name);
console.log(kitty.numLives);
kitty.numLives = kitty.numLives - 1;
kitty.numLives--;
console.log(kitty.numLives);
