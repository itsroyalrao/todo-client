import axios from "axios";
import { url } from "./backendUrl";

export default async function deleteTodo(id, setTodos, getTodos) {
  try {
    await axios.delete(`${url()}/todo?id=${id}`);

    await getTodos(setTodos);
  } catch (e) {
    console.log(e.message);
  }
}
