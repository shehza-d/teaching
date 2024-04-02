let myForm = document.querySelector("#table-form");
let input = document.querySelector("#table-input");
let tableDiv = document.querySelector("#mera-table");

tableDiv.innerHTML = "<h1> shehzad </h1>";
tableDiv.innerText = "<h1> shehzad </h1>";

myForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents page reload

  let tableOf = input.value;

  for (let i = 1; i <= 12; i++) {
    let message = `${tableOf} X ${i} = ${tableOf * i}`;
    tableDiv.innerHTML += message + "<br>";
  }
});

let tableOf = prompt("table number");

console.log(tableOf + " x " + 1 + " = " + tableOf * 1);
console.log(`${tableOf} x 2 = ${tableOf * 2}`);
console.log(`${tableOf} x 2 = ${tableOf * 3}`);

// https://github.com/Bilalzafar0020/Trello---Clone
// https://developer.mozilla.org/en-US/docs/Web/Events

for (let i = 0; i < 12; i++) {
  console.log(i);
}
let age = 21;
let name = "Shehzad";
let message = "my name is " + name + " and my age is " + age + "!";
let message = `My name is ${name} and my age is ${age}!`;
console.log(message);
