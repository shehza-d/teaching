// Nested Loop
for (let i = 0; i < 2; i++) {
  console.log("outer loop start");

  for (let j = 0; j < 2; j++) {
    console.log(`shehzad i: ${i}  j: ${j}`);
  }

  console.log("outer loop end");
}

let myName = "shehzad";
let age = 21;

let str = "My name is" + " " + myName + " and i am " + age + 5 + " years old.";
let str2 = `My name is ${myName} and i am ${age + 5} years old`;

console.log(str);

let column = 20;
let row = 6;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    console.log(`row = ${i + 1} column = ${j + 1}`);
  }
}

// 2D array or Nested Array
let matrix = [[21, 2, 3], [34], [1, 5, 6, 99]];

// Printing 2D array
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].length);

  for (let j = 0; j < matrix[i].length; j++) {
    // console.log("i" , i, "j", j);
    console.log(matrix[i][j]);
  }
}
