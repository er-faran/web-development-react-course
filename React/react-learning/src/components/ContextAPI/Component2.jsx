/* eslint-disable react/prop-types */
import React from "react";
import Component3 from "./Component3";
import { useContext } from "react";
import { UsernameContext } from "../../context/UsernameContext";
const Component2 = () => {
  const data = useContext(UsernameContext);

  return (
    <div>
      <Component3 />
    </div>
  );
};

export default Component2;
