import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.querySelector("#loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const email = data.get("email");
  const password = data.get("password");

  const result = await signInWithEmailAndPassword(auth, email, password);
  console.log("🚀 ~ form.addEventListener ~ result:", result);
});

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "./dashboard.html";
    } else {
    }
  });
};
checkAuthState();
