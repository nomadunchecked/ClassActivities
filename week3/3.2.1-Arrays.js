// // create an Array using an Array literal
let Array = [3, "jet", true, NaN, 55];

// // access the 1st item in the Array
// console.log(Array[0]);

// // access the last item in the Array
// console.log(Array[Array.length - 1]);

// // print the length of the Array
// console.log(Array.length);

// // use the length property to access the last item in the Array
// console.log(Array[Array.length - 1]);

let newArray = [];
// with for...of,
// loop over the Array,
// modify the value
// and add to a different Array

// eslint-disable-next-line no-unused-vars
for (let name of Array) {
  newArray.push("xxx-" + Array);
}
for (let i of newArray) {
  console.log(i);
}
console.log(Array);
// console.log(newArray);
// console.log(newArray.length);
