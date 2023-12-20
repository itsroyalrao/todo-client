import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupDetails } from "../../functions/user";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    document.title = "Signup | Todo";
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 h-[100dvh] flex flex-col items-center justify-center">
        <div className="bg-blue-900 flex flex-col items-center rounded shadow-md shadow-white">
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="flex flex-col items-center px-4 mt-16 pb-3 space-y-2">
            <input
              type="text"
              className="w-full px-3 py-2 placeholder:italic focus:outline-none focus:outline-blue-600 text-black"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              className="w-full px-3 py-2 placeholder:italic focus:outline-none focus:outline-blue-600 text-black"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full px-3 py-2 placeholder:italic focus:outline-none focus:outline-blue-600 text-black"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="w-full px-3 py-2 placeholder:italic focus:outline-none focus:outline-blue-600 text-black"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {message && <div className="text-red-600">{message}</div>}
            <div className="flex py-2 text-sm text-white justify-center space-x-1">
              <span className="">Already have an account?</span>
              <Link className="underline sm:hover:scale-110" to={"/login"}>
                Login
              </Link>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-900 w-40 rounded-b flex items-center justify-center text-white p-2 sm:cursor-pointer sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold shadow-md shadow-white hover:shadow-none"
          onClick={() =>
            signupDetails(
              username,
              email,
              password,
              confirmPassword,
              setMessage,
              navigate
            )
          }
        >
          Sign up
        </div>
      </div>
    </>
  );
}

export default Signup;
