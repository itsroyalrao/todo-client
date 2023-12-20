import axios from "axios";
import { url } from "./backendUrl";

export default async function getTodos(setTodos) {
  try {
    const email = localStorage.getItem("user");

    const response = await axios.get(`${url()}/todo?email=${email}`);
    setTodos(response.data.data);
  } catch (e) {
    console.log(e.message);
  }
}
