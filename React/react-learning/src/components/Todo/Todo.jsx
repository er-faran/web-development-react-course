import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/slice/taskSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const [task, setTask] = useState("");
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-slate-400">
      <div>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border-2 rounded-md px-2 py-1"
          />
          <button
            onClick={() => {
              dispatch(addTodo({ todoName: task, id: Date.now() }));
              setTask("");
            }}
            className="bg-gray-800 rounded-sm text-lg px-3 ml-3 text-white py-1"
          >
            ADD TASK
          </button>
        </div>
        {tasks?.length ? (
          <div>
            <h3 className="text-3xl mt-5">To do</h3>
            <ul>
              {tasks.map((item, index) => {
                return (
                  <li key={index}>
                    <div>
                      <span>{item?.todoName}</span>
                      <span>
                        <button
                          onClick={() => {
                            dispatch(deleteTodo(item?.id));
                          }}
                        >
                          Delete
                        </button>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Todo;
