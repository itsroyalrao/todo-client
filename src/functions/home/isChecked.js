import axios from "axios";

export default async function isChecked(id, setTodos, getTodos) {
  try {
    // await axios.get(`http://localhost:3000/todo/${id}`);
    await axios.get(`https://todos-app.up.railway.app/todo/${id}`);
    getTodos(setTodos);
  } catch (e) {
    console.log(e.message);
  }
}
