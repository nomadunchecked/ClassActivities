// Array Activity 1
// Create an Array called students that contains the names of 5 students
let students = ["Jim", "Jack", "Don", "Jil", "Sue"];

// Use bracket notation to access and print the name of the 4th student in the list, then print the name of the student in index 2
console.log("The 4th student is: " + students[3]);
console.log("The 2nd student is: " + students[1]);

// Loop over the Array to print out each name
for (let student of students) {
  console.log(student);
}

// Array Activity 2
// Create a variable called roster and assign it the value of the string below
// "These are the students in the list: "
let roster = "These are the students in the list: ";

// Loop over the Array again, but this time each iteration of the loop should add the value to the end of the roster string AND a blank space
for (let student of students) {
  roster += `${student} `;
}

// After the loop, print roster
console.log(roster);

// The expected output should look like this:
// "These are the students in the list: name1 name2 name3 name4 name5"
