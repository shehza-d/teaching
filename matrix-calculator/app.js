"use strict";
const rows = document.querySelector("#rows");
const myForm = document.querySelector("#myForm");
const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const sumBtn = document.querySelector("#sumBtn");
const resultContainer = document.querySelector("#result-container");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const matrixSize = Number(rows.value);
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      container1.innerHTML += `<input type="number" placeholder="" id="input1_${i}_${j}" value="0" style="width:40px;">`;
      container2.innerHTML += `<input type="number" placeholder="" id="input2_${i}_${j}" value="0" style="width:40px;">`;
    }
    container1.innerHTML += `<br/>`;
    container2.innerHTML += `<br/>`;
  }
  //   calculateMatrixValues();
});
const calculateMatrixValues = () => {
  //   let result: number[][] = [];
  const matrixSize = Number(rows.value);
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      //   if (result[i] === undefined) result[i] = [];
      const input1 = document.querySelector(`#input1_${i}_${j}`);
      const input2 = document.querySelector(`#input2_${i}_${j}`);
      //   result[i][j] = Number(input1.value) + Number(input2.value);
      resultContainer.innerHTML += `<input type="number" value="${
        +input1.value + +input2.value
      }" disabled style="width:40px;">`;
    }
    resultContainer.innerHTML += `<br/>`;
  }
};
sumBtn.addEventListener("click", calculateMatrixValues);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// hard code
const arr2 = [
  [5, 3, 3, 7],
  [5, 7, 0, 7],
  [5, 7, 0, 7],
  [5, 7, 0, 7],
];
// const result = [
//   [6, 5, 6],
//   [9, 10, 6],
// ];
const arr = [
  [1, 2, 3, 3],
  [4, 5, 6, 3],
  [4, 5, 6, 3],
  [4, 5, 6, 3],
];
// console.log(arr[1][2]);
let result = [];
for (let i = 0; i < arr.length; i++) {
  // 2
  for (let j = 0; j < arr[i].length; j++) {
    // 4
    if (result[i] === undefined) result[i] = [];
    result[i][j] = arr[i][j] + arr2[i][j];
  }
}
// console.log("🚀 ~ file: app.ts:19 ~ result:", result);
