function addition(x:number, y:number):number {
    return x+y;
}

console.log(addition(20,30));

let result:number = addition(10,20);

console.log(result);

let anonymous = function(a:number, b:number):number {
    return a-b;
}

console.log(anonymous(10,5));


//Function with Optional Parameters
function buildName(firstname: string, lastname?: string) {
    if (lastname)
        return "Hello " + firstname + " " + lastname;
    return "Hello " + firstname;
}
console.log(buildName("John", "Smith"));
console.log(buildName("John"));

//Function with Default Parameters
function buildFullName(firstname:String, lastname = "Smith"):String {
    if(lastname) return "Hello " + firstname + " " + lastname;
    return "Hello " + firstname;
}

console.log(buildFullName("John", "Smith"));

console.log(buildFullName("John"));

//Function with Rest parameters
function buildLongName(firstname:String, ...restOfName:String[]):String {
    return "Hello " + firstname + " " + restOfName.join(" ");
}

console.log(buildLongName("John", "Smith"));

console.log(buildLongName("John"));

console.log(buildLongName("John", "Smith", "Joseph", "Samuel"));

//Arrow Expression - Fat Arrow - Lambda Function
let product = (x:number, y:number):number => {
    return x*y;
}
console.log(product(2,3));

//Arrow Expression without Parameters
let display = () => {
    console.log("Hello World");
}
//console.log(display());
display();

//Function with single line code
let add = (x: number, y: number) => x + y; 
console.log(add(3,4)); 