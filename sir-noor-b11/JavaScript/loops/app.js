// for (initialization; condition; increment) {
// 	loop body
// }

let i = 1;

// for (1; 2; 4) {
//   3;
// }

for (
  console.log("initialization running");
  i <= 4;
  console.log("increment running")
) {
  console.log("body i=", i);
  i++;
}

let students = ["shehzad", "Sharjeel", "Fatima", "konain"];

console.log(students.length);

for (let i = 0; i < 10; i++) {
  if (i === 0) {
    continue; // skip an iteration
  }
  // break;// khatam kr deta hy loop ko
  console.log(i);
  // console.log(students[i]);
}

for (let i = students.length - 1; i > -1; i--) {
  console.log(students[i]);
}

console.log(matrix[0][0]);
console.log(matrix[1].indexOf(34)); // indexOf returns on which index the element is on
console.log(matrix[1].indexOf(4567)); //

let isFound = "nhi mila";

// finding something in array
for (let i = 0; i < students.length; i++) {
  if (students[i] === "Fatima") {
    isFound = i;
    break;
  }
}

if (isFound === "nhi mila") {
  console.log("not found");
} else {
  console.log("Found at index", isFound);
}

// 2D array or Nested Array
let matrix = [[2, 2, 3], [34, 56, 432, 67], [1]];
