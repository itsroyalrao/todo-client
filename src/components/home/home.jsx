import { useEffect, useState } from "react";

export default function Home() {
  const user = localStorage.getItem("user");
  if (!user) {
    window.location.href = "/login";
  }

  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    document.title = "Home | Todo";
  }, []);
  return (
    <>
      {user && (
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 min-h-screen flex flex-col items-center justify-center">
          <div className="w-[100%] h-[100vh] sm:w-[400px] sm:h-[450px] bg-white sm:rounded-3xl flex flex-col items-center px-4 py-2 relative">
            <div className="w-full flex items-center justify-between px-1">
              <div className="font-bold text-3xl text-gray-800 py-2">Todo</div>
              <img
                className="w-10 sm:cursor-pointer"
                src="icons/logout.png"
                alt="logout"
                title="Logout"
                onClick={() => userLogout()}
              />
            </div>
            <div className="w-full overflow-auto">
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex text-lg">
                <input type="checkbox" className="sm:cursor-pointer" />
                <div className="w-full flex justify-between">
                  <div className="px-3 capitalize">one</div>
                  <div className="flex space-x-4 sm:space-x-2">
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/edit.png"
                      alt="edit"
                    />
                    <img
                      className="sm:cursor-pointer w-5 h-5"
                      src="icons/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center bg-white absolute bottom-0 rounded-b-3xl">
              {showInput ? (
                <>
                  <div className="w-full flex justify-around px-2">
                    <input
                      className="w-[75%] rounded sm:rounded-lg px-3 my-3 placeholder:italic text-black border-gray-400 border-2 outline-none focus:border-gray-600"
                      type="text"
                      autoFocus
                    />
                    <div
                      className="w-[20%] bg-blue-600 flex justify-center relative my-3 text-white p-2 rounded sm:rounded-lg sm:cursor-pointer"
                      onClick={() => setShowInput(!showInput)}
                    >
                      Add
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="w-[95%] bg-blue-600 flex justify-center relative my-3 text-white p-2 rounded sm:rounded-xl sm:cursor-pointer"
                  onClick={() => setShowInput(!showInput)}
                >
                  Add Todo
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function userLogout() {
  localStorage.clear();
  window.location.href = "/login";
}
