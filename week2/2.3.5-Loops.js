// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100
// 1) create a variable to represent the current number
let current_Num = 1;
// 2) create a variable to represent the current total
let sum = 0;

// 3) write a while loop that sums the numbers from 1 to 100
// while (current_Num <= 100) {
//   sum = sum + current_Num;
//   current_Num++;
// }
// console.log(sum);

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);
