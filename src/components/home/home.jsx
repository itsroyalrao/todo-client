import { useEffect, useState } from "react";

import userLogout from "../../functions/home/userLogout";
import launchHome from "../../functions/home/launchHome";
import addTodo from "../../functions/home/addTodo";
import getTodos from "../../functions/home/getTodos";
import deleteTodo from "../../functions/home/deleteTodo";
import isChecked from "../../functions/home/isChecked";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    launchHome(setLoadingStatus);
    getTodos(setTodos);
  }, []);
  return (
    <>
      {loadingStatus && (
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 h-[100dvh] flex flex-col items-center justify-center">
          <div className="w-[100%] h-[100dvh] sm:w-[450px] sm:h-[500px] bg-white sm:rounded-3xl flex flex-col items-center px-4 py-2 relative">
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
              {todos ? (
                todos.map((todo) => {
                  return (
                    <div key={todo._id}>
                      <div className="w-full py-4 flex text-lg">
                        <input
                          type="checkbox"
                          className="sm:cursor-pointer"
                          checked={todo.isComplete}
                          disabled={todo.isComplete}
                          onChange={() =>
                            isChecked(todo._id, setTodos, getTodos)
                          }
                        />
                        <div className="w-full flex justify-between">
                          <div className=" px-3 capitalize overflow-hidden break-words">
                            {todo.content}
                          </div>
                          <div className="flex space-x-4 sm:space-x-2">
                            {todo.isComplete && (
                              <img
                                className="sm:cursor-pointer w-5 h-5"
                                src="icons/checked.png"
                                alt="edit"
                              />
                            )}
                            <img
                              className="sm:cursor-pointer w-5 h-5"
                              src="icons/delete.png"
                              alt="delete"
                              onClick={() =>
                                deleteTodo(todo._id, setTodos, getTodos)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="w-full h-[360px] flex justify-center items-center font-bold text-xl text-gray-600">
                  Nothing to do
                </div>
              )}
            </div>
            <div className="w-full flex justify-center bg-white absolute bottom-0 rounded-b-3xl">
              {showInput ? (
                <div className="w-full flex justify-around px-2">
                  <input
                    className="w-[75%] rounded sm:rounded-lg px-3 my-3 placeholder:italic text-black border-gray-400 border-2 outline-none focus:border-gray-600"
                    type="text"
                    value={inputValue}
                    autoFocus
                    placeholder="Type here..."
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addTodo(
                          inputValue,
                          setInputValue,
                          setShowInput,
                          showInput,
                          setTodos,
                          getTodos
                        );
                      }
                    }}
                  />
                  <div
                    className="w-[20%] bg-blue-600 flex justify-center relative my-3 text-white p-2 rounded sm:rounded-lg sm:cursor-pointer"
                    onClick={() =>
                      addTodo(
                        inputValue,
                        setInputValue,
                        setShowInput,
                        showInput,
                        setTodos,
                        getTodos
                      )
                    }
                  >
                    Add
                  </div>
                </div>
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
