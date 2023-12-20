import axios from "axios";
import { url } from "./backendUrl";

const launchHome = async (setLoadingStatus) => {
  const response = await axios.post(`${url()}/auth/status`, {
    email: localStorage.getItem("user"),
  });
  if (response.data.logStatus) setLoadingStatus(response.data.logStatus);
  else window.location.href = "/login";
  document.title = "Home | Todo";
};

export default launchHome;
