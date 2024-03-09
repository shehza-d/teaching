console.log(5 == "6");
console.log("Rose" === "rose"); // preferred

console.log(4 !== 100);

console.log(4 <= 13);

var age = 16;

// truthy values
if (age >= 16) {
  console.log("Driving Pass");
} else {
  console.log("ghar batho aaram se");
}

// A = 41 = 010101101 020302001

var test = Boolean("0");

console.log(test);

if ("0") {
  console.log("This is True");
} else {
  console.log("This is False");
}

// FALSY VALUE 7
// false, 0, -0, 0n, "", null, undefined, NaN

// TRUTHY VALUES
// falsy ky illawa sab values true hyn

var percentage = 30;

// 80 100 = A+
// 70 79  = A
// 60 69  = B
// 50 59  = C
// 40 49  = D
// 40     = Fail

if (percentage >= 80) {
  console.log("A+");
} else if (percentage >= 70) {
  console.log("A");
} else if (percentage >= 60) {
  console.log("B");
} else if (percentage >= 50) {
  console.log("C");
} else if (percentage >= 40) {
  console.log("D");
} else {
  console.log("Fail");
}

// OR Operator
var test1 = false || true || false;
console.log(test1);

var food = true;
var tea = true;
var drink = true;

if (food || tea || drink) {
  console.log("le aao");
} else {
  console.log("ghar jao");
}

// AND Operator
var test2 = true && true && true;
console.log(test2);

var isEnroll = true;
var passed = false;
var age = 20;

if (isEnroll && passed && age > 18) {
  console.log("Pharai karo class ma");
} else {
  console.log("ghar jao");
}
