// for (initialization; condition; increment) {
// 	loop body
// }

let i = 1;

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

for (let i = 0; i < students.length; i++) {
  console.log(i);
  console.log(students[i]);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}
