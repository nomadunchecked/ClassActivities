// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
// function paramFunction(a, b) {
//   console.log(a);
//   console.log(b);
//   return a + b;
// }

// invoke the function and pass in two numbers
// paramFunction(3, 4);

// invoke the function and pass in more than two numbers
// paramFunction(3, 4, 5);

// invoke the function and pass in only one number
// paramFunction(7);

// change the function to set default values for the parameters
// function paramFunction(a, b) {
//   console.log(a);
//   console.log(b);
//   return a + b;
// }

// // again, invoke the function and pass in only one number
// paramFunction(5);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function paramFunction(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(...rest);
  return a + b;
}

paramFunction(5, 4, 4, 6, 7, 34, 34);
// again, invoke the function and pass in more than two numbers
