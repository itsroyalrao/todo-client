import axios from "axios";

const launchHome = async (setLoadingStatus) => {
  const response = await axios.post(
    // "https://todos-app.up.railway.app/auth/status",
    "http://localhost:3000/auth/status",
    {
      email: localStorage.getItem("user"),
    }
  );
  if (response.data.logStatus) setLoadingStatus(response.data.logStatus);
  else window.location.href = "/login";
  document.title = "Home | Todo";
};

export default launchHome;
