import React, { useMemo } from "react";

// Show Todo which is not completed

const todo = [
  { todo: "Drink Water", completed: false },
  { todo: "Walk", completed: false },
  { todo: "Lunch", completed: false },
  { todo: "Learning", completed: true },
];

const Learning9 = ({ isDarkTheme }) => {
  //   const user = localStorage.getItem("username");

  // filtering Data
  const filteredTodo = () => {
    console.log("filtering");

    return todo.filter((item) => {
      return item.completed == false;
    });
  };

  const filterData = useMemo(() => filteredTodo(), []);

  return (
    <div className={isDarkTheme ? "dark-container" : "light-container"}>
      <h2>UseMemo</h2>
      <br />
      <h4>To Do</h4>
      <ul>
        {filterData.map((item, index) => {
          return (
            <li key={index}>
              {item.todo} - {item.completed === true ? "DONE" : "Not Started"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Learning9;
