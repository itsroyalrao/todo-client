import axios from "axios";

export default async function userLogout() {
  try {
    await axios.post(
      "http://localhost:3000/auth/logout",
      // "https://todos-app.up.railway.app/auth/logout",
      {
        email: localStorage.getItem("user"),
      }
    );
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}
