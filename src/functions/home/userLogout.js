import axios from "axios";
import { url } from "./backendUrl";

export default async function userLogout() {
  try {
    await axios.post(`${url()}/auth/logout`, {
      email: localStorage.getItem("user"),
    });
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}
