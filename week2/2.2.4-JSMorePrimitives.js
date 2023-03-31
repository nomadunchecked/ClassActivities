// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let var1 = 5;
let var2 = true;
let var3 = "Corvettes";
let var4 = null;
let var5;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof var3);
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var5);
console.log(typeof var4);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let question = `How many ${var3} should I have, ${var1} or more?`;
console.log(question);

// reassign the value of the variable that references "null"
var4 = 7;

// print the value and its type
console.log(var4);
console.log(typeof var4);

// print a variable that causes a ReferenceError
// console.log(typeOfAircraft);

// alter the previous line to no longer cause a ReferenceError
// Need to instantiate variable "typeOfAircraft", and assign value of "jet", which is a "string" data type.
let typeOfAircraft = "jet";
console.log(typeOfAircraft);