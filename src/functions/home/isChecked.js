import axios from "axios";
import { url } from "./backendUrl";

export default async function isChecked(id, setTodos, getTodos) {
  try {
    await axios.get(`${url()}/todo/${id}`);
    getTodos(setTodos);
  } catch (e) {
    console.log(e.message);
  }
}
