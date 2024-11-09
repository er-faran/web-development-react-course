import { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent.jsx";
import FunctionalComponent from "./components/FunctionalComponent.jsx";
import LearningHookComponent from "./components/LearningHookComponent.jsx";
import LearningDay7 from "./components/LearningDay7.jsx";
import LearningDay8 from "./components/LearningDay8.jsx";
import Learning9 from "./components/Learning9.jsx";
import { ThemeProvider } from "./themeContext.jsx";
import Dashboard from "./components/HOC/Dashboard.jsx";
import Home from "./components/MUI/Home.jsx";

function App() {
  const [appName, setAppName] = useState("React Learning");
  const [id, setId] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [user, setUser] = useState("Sameer");
  // localStorage.setItem("username", "Sameer");
  // localStorage.setItem("age", 18);
  // localStorage.clear();

  return (
    <>
      {/* <ThemeProvider> */}
      {/* <LearningHookComponent id={id} />
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <FunctionalComponent appName={appName} />
        <ClassComponent />
        <LearningDay7 />
        <LearningDay8 />
        <button
          type="button"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle Theme
        </button>

        <h3>Dashboard</h3>
        <span>Logged in user : {user}</span>
        <Learning9 isDarkTheme={isDarkTheme} /> */}
      {/* </ThemeProvider> */}
      {/* <Dashboard /> */}
      <Home />
    </>
  );
}

export default App;
