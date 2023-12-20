import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { changePass } from "../../functions/user";

function ChangePassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    document.title = "Change Password | Todo";
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-full h-[100dvh] flex flex-col items-center justify-center">
        <div className="bg-blue-900 flex flex-col items-center rounded shadow-md shadow-white">
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="px-4 mt-12 pb-3">
            <div className="text-white text-2xl">Change your password</div>
            <div className="flex flex-col items-center py-4 space-y-2">
              <input
                type="password"
                className="w-full px-3 py-2 placeholder:italic focus:outline-none focus:outline-blue-600 text-black"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                className="w-full px-3 py-2 placeholder:italic focus:outline-none focus:outline-blue-600 text-black"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              {message && <div className="text-red-600">{message}</div>}
            </div>
          </div>
        </div>
        <div
          className="bg-blue-900 w-44 rounded-b flex items-center justify-center text-white p-2 sm:cursor-pointer sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold shadow-md shadow-white hover:shadow-none"
          onClick={() =>
            changePass(
              email,
              newPassword,
              confirmNewPassword,
              setMessage,
              navigate
            )
          }
        >
          Change Password
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
