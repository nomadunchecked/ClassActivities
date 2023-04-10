// // ? what does the function below return?
// Function myNumberFunction returns 'undefined' because there is no 'return' statement
// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   console.log(num);
// }

// change the function above to return a value
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}

console.log(myNumberFunction());

// Short Circuiting
// ! the console.log will not print
//   function shortCircuitFunction() {
//     return "Zap! - Short Circuited!";
//     console.log(
//       "This will never print because it is after the return statement."
//     );
// //   }

// // ? will the following function short circuit?
let height = 70;
function checkCircusRides() {
  if (height < 48) {
    return "Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
}

console.log(checkCircusRides());
// change the function above to use short circuiting
