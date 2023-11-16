import axios from "axios";

export default async function deleteTodo(id, setTodos, getTodos) {
  try {
    // await axios.delete(`http://localhost:3000/todo?id=${id}`);
    await axios.delete(`https://todos-app.up.railway.app/todo?id=${id}`);

    await getTodos(setTodos);
  } catch (e) {
    console.log(e.message);
  }
}
