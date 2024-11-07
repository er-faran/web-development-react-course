import { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent.jsx";
import FunctionalComponent from "./components/FunctionalComponent.jsx";
import LearningHookComponent from "./components/LearningHookComponent.jsx";
import LearningDay7 from "./components/LearningDay7.jsx";
import LearningDay8 from "./components/LearningDay8.jsx";

function App() {
  const [appName, setAppName] = useState("React Learning");
  const [id, setId] = useState(1);
  return (
    <>
      {/* <LearningHookComponent id={id} />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> */}
      {/* <FunctionalComponent appName={appName} /> */}
      {/* <ClassComponent /> */}
      {/* <LearningDay7 /> */}
      <LearningDay8 />
    </>
  );
}

export default App;
