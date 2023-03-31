// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "noon";

// Create a variable "greeting" that references a template literal
let greeting = `Hello, what time of day is it?`;

// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let reply = `Hello, it is morning, but I am really waiting for ${timeOfDay}.`;

// Print "greeting"
console.log(greeting);
console.log(reply);

// Create a new variable, but do not assign it a value
let newVar;

// Print the new variable and its type
console.log(typeof newVar);
// What type should we expect?
// undefined

// Assign the variable a value that indicates the variable is purposely blank
newVar = null;
// What value should we assign?
// null

// Print the variable and its type again
console.log(typeof newVar);
// What type should we expect?
// null

// Try to print a variable that does not exist
console.log(brain);
// What should we expect to print in the CLI?
// ReferenceError: variable "brain" in not defined

// Print "greeting" again
console.log(greeting);
// Will this line run?
// No, because JS runs top-to-bottom, and is stuck one line 33 "ReferenceError: brain is not defined"
