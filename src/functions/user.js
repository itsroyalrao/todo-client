import axios from "axios";
import { url } from "./backendUrl";

async function signupDetails(
  username,
  email,
  password,
  confirmPassword,
  setMessage,
  navigate
) {
  try {
    const userDetails = {
      name: username,
      email,
      password,
    };
    if (!username) setMessage("Please provide name");
    else if (!email) setMessage("Please provide email");
    else if (!password) setMessage("Password is required");
    else if (password === confirmPassword) {
      const result = await axios.post(`${url()}/auth/signup`, userDetails);
      if (result.data.success) navigate("/login");
      else {
        setMessage(result.data.message);
      }
    } else {
      setMessage("Password do not match!");
    }
  } catch (e) {
    console.log(e.message);
  }
}

async function loginDetails(email, password, setMessage, navigate) {
  try {
    if (!email) setMessage("Please enter your email");
    else if (!password) setMessage("Password is required");
    else {
      const result = await axios.post(`${url()}/auth/login`, {
        email,
        password,
      });
      if (result.data.success) {
        localStorage.setItem("user", email);
        navigate("/");
      } else {
        setMessage(result.data.message);
      }
    }
  } catch (e) {
    console.log(e.message);
  }
}

async function userLogout() {
  try {
    await axios.post(`${url()}/auth/logout`, {
      email: localStorage.getItem("user"),
    });
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

const resetPass = async (email, setMessage, navigate) => {
  try {
    const response = await axios.post(`${url()}/auth/resetPassword`, { email });

    if (response.data.success) {
      setMessage(response.data.msg);
      navigate(`/changePassword?email=${email}`);
    } else setMessage(response.data.msg);
  } catch (e) {
    console.log(e.message);
  }
};

const changePass = async (
  email,
  newPassword,
  confirmNewPassword,
  setMessage,
  navigate
) => {
  try {
    if (newPassword === confirmNewPassword) {
      const response = await axios.post(`${url()}/auth/changePassword`, {
        email,
        newPassword,
      });
      if (response.data.success) {
        setMessage(response.data.msg);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } else setMessage("Password do not match!");
  } catch (e) {
    console.log(e.message);
  }
};

export { signupDetails, loginDetails, userLogout, resetPass, changePass };
