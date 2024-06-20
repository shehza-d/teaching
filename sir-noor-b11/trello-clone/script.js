const columns = document.querySelectorAll(".column");

const createTask = (task) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(task);
  p.setAttribute("draggable", "true");
  p.appendChild(textNode);

  return p;
};

let data = localStorage.getItem("data");
data = JSON.parse(data);
console.log("🚀 ~ addTask ~ data:",data);

data.forEach((task) => {
  const p = createTask(task);

  columns[0].appendChild(p);
});

// jis chez se ye event bana hy wo target hy
const addTask = (event) => {
  event.preventDefault();

  const form = event.target;
  const task = form.children[0].value;
  const parent = form.parentElement;

  //   parent.style.border = '5px solid green'
  //   console.log(parent.style.border);
  data.push(task);
console.log('data :>> ', data);
  localStorage.setItem("data", JSON.stringify(data));

  const p = createTask(task);

  parent.insertBefore(p, form);

  form.reset();
};
  console.log("🚀 ~ addTask ~ data:", data)

for (let i = 0; i < columns.length; i++) {
  const form = columns[i].lastElementChild;

  form.addEventListener("submit", addTask);
}

// let name = prompt("enter your name ?")
// localStorage.setItem("userName", );
// const myName = localStorage.getItem("userName")
// console.log(myName);
