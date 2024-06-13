import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  console.log("user: ", user);

  if (user) {
    window.location.href = "./pages/dashboard.html";
  } else {
    window.location.href = "./pages/login.html";
  }
});
