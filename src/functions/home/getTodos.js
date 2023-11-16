import axios from "axios";

export default async function getTodos(setTodos) {
  try {
    // const response = await axios.get("http://localhost:3000/todo");
    const response = await axios.get("https://todos-app.up.railway.app/todo");
    setTodos(response.data.data);
  } catch (e) {
    console.log(e.message);
  }
}
