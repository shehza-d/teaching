let name = ["shehzad"];
let testName = name;
// let testName = [...name];// refrence torna

testName[0] = "obaid";

console.log("name ", name);
console.log("testName ", testName);

name = "obaid";

console.log(name.charCodeAt(0));
// 1011
// primitive

const array = [3, 4, 5];

array = [3, 4, 5];
array.pop(); // removes last
array.pop();
array.push("shehzad");
array.unshift("shehzad"); // removes first

console.log(array);

// const ky sath memory reference change nhi hoga value change ho sagti hy
// let ky sath sabkuxh change ho sagta hy

const fruits = ["orange", "apple", "mango", "banana"];

const b = fruits.splice(1, 0, "shehzad");

// const a = fruits.toSorted()

// console.log(b);
console.log(fruits);

// array is for looping
// array ma sequence matter karti hy
// object ma sequence matter nhi karti

const student = {
  name: "shehzad",
  fatherName: "iqbal",
  age: 30,
};

for (const key in student) {
  console.log(key, " : ", student[key]);
}
// i 9
for (let i = 0; i < 10; i++) {
  console.log("shehzad");
}

// for(1,2,4)
// {3}
let i = 0;

for (console.log("test"); i < 10; console.log("smit")) {
  console.log("shehzad");
  i++;
}
