let basket = ["apple", "banana", "mongo", "orange"];

let i = 0;

for (; i < 6; console.log("increment")) {
  console.log(basket[i]);

  i++;
}

let testing = basket.map((item, i) => {
  console.log(`Element is at index ${i} is ${item}`);
  return item.toUpperCase();
});

console.log("testing", testing);
// pattern

let n = +prompt("enter number");

let result = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

const books = [
  { title: "Book1", author: "Author1", price: 20 },
  { title: "Book2", author: "Author2", price: 30 },
  { title: "Book3", author: "Author3", price: 25 },
  { title: "Book4", author: "Author4", price: 15 },
];

function tt(books, maxPrice) {
  let result = [];

  for (let i = 0; i < books.length; i++) {
    if (maxPrice > books[i].price) {
      result.push(books[i]);
    }
  }
  return result;
}

console.log(tt(books, 25));
