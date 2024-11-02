import { useState } from "react";

const FunctionalComponent = (props) => {
  const [name, setName] = useState();

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        type="button"
        // eslint-disable-next-line react/prop-types
        onClick={() => alert(`Hi i am ${name} on platform ${props.appName}`)}
      >
        Show Alert
      </button>
    </div>
  );
};

export default FunctionalComponent;

// Another way to write functional component
// function FunctionalComponent {
//     return <div>Hi This is Functioanl Component</div>;
// };

// State - Hold Data in Component
// Props - Data coming from as an argument
