const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const zero = nums.pop();
console.log(zero);
const one = nums.pop();
console.log(one);
// // remove each of the first two items with shift(), saving each item to a variable
const six = nums.shift();
console.log(six);
const five = nums.shift();
console.log(five);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(one);
nums.unshift(zero);
nums.push(five);
nums.push(six);
console.log(nums);
