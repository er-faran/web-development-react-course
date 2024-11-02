import { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent.jsx";
import FunctionalComponent from "./components/FunctionalComponent.jsx";

function App() {
  const [appName, setAppName] = useState("React Learning");
  return (
    <>
      <FunctionalComponent appName={appName} />
      {/* <ClassComponent /> */}
    </>
  );
}

export default App;
