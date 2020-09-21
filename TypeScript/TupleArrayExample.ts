let employees:Array<[name:string, phone:number]>;
employees = [
             ["John", 9922334455], 
             ["Cathy", 9887293822], 
             ["Stacie", 9781224498]
            ];

console.log(employees);

//find number of Stacie
let searchstring = "Stacie";
for (let index = 0; index < employees.length; index++) {
    console.log(employees[index][0]);
    if(employees[index][0] == searchstring) {
        console.log(searchstring + "'s number is: " +employees[index][1]);
        break;
    }
}

//find number of Cathy
searchstring = "Cathy";
employees.forEach(element => {
    if(element[0] == searchstring) {
        console.log(searchstring + "'s number is: "+element[1]);
    }
});