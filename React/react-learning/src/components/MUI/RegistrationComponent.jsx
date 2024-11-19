import React from "react";
import StepperComponent from "./StepperComponent";

export default function RegistrationComponent() {
  const steps = [
    {
      label: "Basic Information",
      description: "Fill the basics inforation for user",
    },
    {
      label: "Create credentials",
      description: "Create stronge password for securirt reasons",
    },
  ];
  function onSubmitHandler(params) {
    console.log(params);
  }

  return (
    <div>
      <h2>Registration</h2>
      <p>Please enter corrrect details to register user</p>

      <div></div>
      <div>
        <StepperComponent
          steps={steps}
          activeStepCount={0}
          finalMessage={"You have registered successfully. Thanks"}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
    </div>
  );
}
