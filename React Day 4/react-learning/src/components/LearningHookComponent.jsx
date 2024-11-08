/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../themeContext";

// useState - to store data within component
// useEffect - componentDidMount()
// Custom Hook

const LearningHookComponent = ({ id }) => {
  // get theme
  const { isDarkTheme } = useContext(ThemeContext);
  console.log("theme", isDarkTheme);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [todo, setTodo] = useState({});
  //   console.log("initial", name, age);

  //   This useeffect will run when component load and when props.id will change
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => setTodo(json));
    console.log("calling");

    // Clear data activity when component is unmounting
    return () => {
      setName("");
      setAge("");
      setTodo({});
    };
  }, [id]);

  console.log(todo);

  return (
    <div>
      {/* <h2>Contact Us</h2> */}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault(); // it will prevent the default relod page behaiver
          //   console.log(name, age);
        }}
      >
        <label htmlFor="name">Name : </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label htmlFor="age">Age : </label>
        <input
          id="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br />

        <button type="submit">Submit</button>
      </form> */}
      <div className="todo-response">
        <h3>TODO : {todo?.title}</h3>
        <span>{todo?.completed ? "Completed" : "No Started"}</span>
      </div>
    </div>
  );
};

export default LearningHookComponent;
