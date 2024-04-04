// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8

// loops
// matrix cal

// BODMAS
// https://www.skillsyouneed.com/images/bodmas.png

// let age = 8
// if (age > 18) {
//   console.log("You can drive");
// } else {
//   console.log("baray ho kr aana ");
// }

// Array
let basket = ["apple", "banana", "mango"];

// console.log(basket[0]);
basket.push("orange");

basket.pop();
// basket.pop()
// basket.pop()

basket.shift();
basket.unshift("testing");

// console.log(basket);

// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// for (let i = 0; i < 8; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
//   // console.log(basket[0]);
//   basket.push("orange");

//   basket.pop();
// }

let students = [
  "shehzad",
  "abrar",
  "ahmed",
  "ali",
  "fatima",
  "tasmiah",
  "ahmed",
];

// students[1] = "tayyaba"

// for (let i = 0; i < students.length; i++) {
//   if (students[i] === "ahmed" || students[i] === "abrar") {
//     console.log("ahmed is at ", i);

//     students[i] = "asad";
//   }
// }

// console.log("result", students);

let test2 = "";

if (test2) {
  console.log("This value is true");
}

console.log(Boolean(test2));
