import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; //CDN

const colRef = collection(db, "listOfMyProducts"); // collection ref

// koi unauthenticated banda loign kiye baghir dashboard per na aajaye
const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      window.location.href = "./login.html";
    }
  });
};
checkAuthState();

const form = document.querySelector("#productsForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const name = data.get("name");
  const description = data.get("description");
  const price = data.get("price");

  const result = await setDoc(
    doc(db, "listOfMyProducts", crypto.randomUUID()),
    {
      name: name,
      description,
      price: price,
    },
  );

  console.log("result ", result);
});

const div = document.querySelector("#productList");

const getProducts = async () => {
  const products = await getDocs(colRef);
  console.log("🚀 ~ getProducts ~ products:", products);

  const myData = [];
  products.docs.forEach((doc) => {
    myData.push({ ...doc.data(), id: doc.id });
  });

  myData.forEach((product) => {
    console.log("🚀 ~ myData.forEach ~ product:", product);
    div.innerHTML += `<div class="card">
        <h3>${product.name}</h3>
        <span>${product.price}</span>
        <p>${product.description}</p>
      </div>`;
  });
};
getProducts();
