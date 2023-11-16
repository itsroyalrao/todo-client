import axios from "axios";

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

      await axios.post(
        // "http://localhost:3000/todo",
        "https://todos-app.up.railway.app/todo",
        {
          email,
          inputValue,
        }
      );

      setInputValue("");
      getTodos(setTodos);
    } catch (e) {
      console.log(e);
    }
  }
  setShowInput(!showInput);
}
