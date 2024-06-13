import { auth } from "./firebase.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.querySelector("#loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const username = data.get("username");
  const email = data.get("email");
  const password = data.get("password");

  const result = await createUserWithEmailAndPassword(auth, email, password);
  console.log("🚀 ~ form.addEventListener ~ result:", result);
});
