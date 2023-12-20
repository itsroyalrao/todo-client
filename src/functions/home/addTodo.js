import axios from "axios";
import { url } from "./backendUrl";

export default async function addTodo(
  inputValue,
  setInputValue,
  setShowInput,
  showInput,
  setTodos,
  getTodos
) {
  if (inputValue) {
    try {
      const email = localStorage.getItem("user");

      await axios.post(`${url()}/todo`, {
        email,
        inputValue,
      });

      setInputValue("");
      getTodos(setTodos);
    } catch (e) {
      console.log(e);
    }
  }
  setShowInput(!showInput);
}
