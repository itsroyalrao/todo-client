import axios from "axios";
import { useEffect } from "react";

function ResetPassword() {
  useEffect(() => {
    document.title = "Reset Password | Todo";
  }, []);
  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-full min-h-screen flex flex-col items-center justify-center">
        <div className="bg-blue-900 flex flex-col items-center rounded-3xl shadow-md shadow-white">
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="px-4 mt-12 pb-3">
            <div className="text-white text-2xl">Reset your password</div>
            <div className="flex flex-col items-center py-4 space-y-2">
              <input
                type="email"
                id="email"
                className="w-full rounded-lg px-3 py-2 placeholder:italic focus:outline-none focus:outline-blue-600 text-black"
                placeholder="Email ID"
                autoComplete="email"
              />
              <div id="error-message" hidden></div>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-900 w-44 rounded-b-xl flex items-center justify-center text-white p-2 sm:cursor-pointer sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold shadow-md shadow-white hover:shadow-none"
          onClick={(e) => resetPass(e)}
        >
          Reset Password
        </div>
      </div>
    </>
  );
}

const resetPass = async () => {
  try {
    const email = document.getElementById("email").value;

    const response = await axios.post(
      "http://localhost:3000/auth/resetPassword",
      // "https://todos-app.up.railway.app/auth/resetPassword",
      { email }
    );

    if (response.data.success) DisplayMessage(response.data.msg, true);
    else DisplayMessage(response.data.msg, false);

    document.getElementById("email").value = "";
  } catch (e) {
    console.log(e.message);
  }
};

function DisplayMessage(message, bool) {
  const msg = document.getElementById("error-message");
  msg.innerHTML = "";
  msg.style.display = "block";
  if (bool) msg.className = "text-green-600";
  else msg.className = "text-red-400";
  msg.appendChild(document.createTextNode(message));
}

export default ResetPassword;
