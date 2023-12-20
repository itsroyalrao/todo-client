import axios from "axios";
import { url } from "./backendUrl";

async function addTodo(
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

async function getTodos(setTodos) {
  try {
    const email = localStorage.getItem("user");

    const response = await axios.get(`${url()}/todo?email=${email}`);
    setTodos(response.data.data);
  } catch (e) {
    console.log(e.message);
  }
}

async function isChecked(id, setTodos, getTodos) {
  try {
    await axios.get(`${url()}/todo/${id}`);
    getTodos(setTodos);
  } catch (e) {
    console.log(e.message);
  }
}

async function deleteTodo(id, setTodos, getTodos) {
  try {
    await axios.delete(`${url()}/todo?id=${id}`);

    await getTodos(setTodos);
  } catch (e) {
    console.log(e.message);
  }
}

export { addTodo, getTodos, isChecked, deleteTodo };
