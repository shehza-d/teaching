let matrix1 = [
  [3, 4, 4, 1],
  [5, 2, 1, 1],
  [4, 4, 4, 1],
  [2, 2, 2, 2],
];
let matrix2 = [
  [1, 1, 0, 1],
  [9, 0, 2, 1],
  [2, 6, 3, 1],
  [2, 2, 2, 2],
];

console.log(matrix2[0][0]);

console.log(matrix1[0][0] + matrix2[0][0]);
console.log(matrix1[0][1] + matrix2[0][1]);
console.log(matrix1[0][2] + matrix2[0][2]);

console.log(matrix1[1][0] + matrix2[1][0]);
console.log(matrix1[1][1] + matrix2[1][1]);
console.log(matrix1[1][2] + matrix2[1][2]);

console.log(matrix1[2][0] + matrix2[2][0]);
console.log(matrix1[2][1] + matrix2[2][1]);
console.log(matrix1[2][2] + matrix2[2][2]);

let result = [];

for (let i = 0; i < matrix2.length; i++) {
  result[i] = [];

  for (let j = 0; j < matrix2[i].length; j++) {
    let sum = matrix1[i][j] + matrix2[i][j];
    // console.log("i:", i, " result", result[i]);
    result[i].push(sum);
  }
}

// result[0][0] = "shehzad";// possible is [[]]
// result[1][0] = "shehzad";// not possible

console.log(" result:", result);

// result [
//   [4, 5, 4],
//   [14, 2, 3],
//   [6, 10, 7],
// ];
