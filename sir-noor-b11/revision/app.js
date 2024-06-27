// Variable Scoping

let x = 5;

{
  x = 6;
} // scope ky sab variables delete ho jaty hyn

console.log("🚀 ~ x:", x);

//

// Template literals
const name = "shehzad";
const age = 22;

const text = "My name is " + name + " and i am " + age + ' years" old!';
const text = `My name is ${name} and i am ${age} years" old!`;

console.log("🚀 ~ text:", text);

//

// Default parameter
const sum = (num1 = 0, num2 = 0) => {
  console.log("🚀 ~ sum ~ num1:", num1);
  console.log("🚀 ~ sum ~ num2:", num2);

  return num1 + num2;
};

// d/b arrow and function is of this context
console.log("sum() :>> ", sum(7));

//

// Enhanced object literals
const myObj = {
  myName: "shehzad",
  string: function () {
    return `my name is ${this.myName}`;
  },
  age: 21,
};
console.log("myObj.string :>> ", myObj.string());

Object.entries(myObj);
console.log("Object :>> ", Object.entries(myObj));

Object.entries(myObj).forEach((item) => {
  console.log("🚀 ~ Object.entries ~ item:", item);
});

for (const myKey in myObj) {
  const value = myObj["string"];

  console.log("🚀 ~ myKey:", value);
}

const test = "myName";

console.log("myObj :>> ", myObj[test]);
myObj["age"];
myObj.age;

console.log("this :>> ", this);

let a = (_) => _;

let abc = a("shehzad");

console.log("🚀 ~ abc:", abc);

function isValid(s) {
  let result = false;

  return result;
}

const s = "()[]{}"; // true
// const s = "({)}" // false

console.log(isValid(s));
