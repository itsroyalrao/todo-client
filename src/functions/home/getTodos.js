import axios from "axios";

export default async function getTodos(setTodos) {
  try {
    const email = localStorage.getItem("user");

    // const response = await axios.get(`http://localhost:3000/todo?email=${email}`);
    const response = await axios.get(
      `https://todos-app.up.railway.app/todo?email=${email}`
    );
    setTodos(response.data.data);
  } catch (e) {
    console.log(e.message);
  }
}
