import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slice/taskSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const [task, setTask] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addTodo({ todoName: task }));
          }}
        >
          ADD TASK
        </button>
      </div>
      <div>
        <h3>To do</h3>
        <ul>
          {tasks.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <span>{item?.todoName}</span>
                  <span>
                    <button>Delete</button>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
