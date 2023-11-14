import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./components/home/home.jsx";
import ChangePassword from "./components/auth/ChangePassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
