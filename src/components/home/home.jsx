export default function Home() {
  const user = localStorage.getItem("user");
  if (!user) {
    window.location.href = "/login";
  }
  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 min-h-screen flex flex-col items-center justify-center">
        <div className="w-[80vw] h-[80vh] sm:w-[400px] sm:h-[450px] bg-white rounded-3xl flex flex-col items-center">
          <div className="font-bold text-3xl text-gray-800 p-2">Todo</div>
          <div className="w-full p-4 flex text-lg">
            <input type="checkbox" className="cursor-pointer" />
            <div className="w-full flex justify-between">
              <div className="px-3 capitalize">one</div>
              <div className="flex space-x-2">
                <img
                  className="cursor-pointer w-5 h-5"
                  src="icons/edit.png"
                  alt="delete"
                />
                <img
                  className="cursor-pointer w-5 h-5"
                  src="icons/delete.png"
                  alt="delete"
                />
              </div>
            </div>
          </div>
          <div className="w-full p-4 flex text-lg">
            <input type="checkbox" className="cursor-pointer" />
            <div className="w-full flex justify-between">
              <div className="px-3 capitalize">one</div>
              <div className="flex space-x-2">
                <img
                  className="cursor-pointer w-5 h-5"
                  src="icons/edit.png"
                  alt="delete"
                />
                <img
                  className="cursor-pointer w-5 h-5"
                  src="icons/delete.png"
                  alt="delete"
                />
              </div>
            </div>
          </div>
          <div className="w-full p-4 flex text-lg">
            <input type="checkbox" className="cursor-pointer" />
            <div className="w-full flex justify-between">
              <div className="px-3 capitalize">one</div>
              <div className="flex space-x-2">
                <img
                  className="cursor-pointer w-5 h-5"
                  src="icons/edit.png"
                  alt="delete"
                />
                <img
                  className="cursor-pointer w-5 h-5"
                  src="icons/delete.png"
                  alt="delete"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
