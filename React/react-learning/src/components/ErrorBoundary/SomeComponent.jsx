/* eslint-disable react/prop-types */
import React from "react";

const SomeComponent = (props) => {
  const names = props.names;
  return <div>Hi {names[0]}</div>;
};

export default SomeComponent;
