/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UsernameContext } from "../../context/UsernameContext";

const Component4 = () => {
  const data = useContext(UsernameContext);
  console.log("data", data);

  return (
    <div>
      <h1>User Details</h1>
      <div>{data.userName}</div>
      <div>{data.age}</div>
      <div>{data.cart.price}</div>
    </div>
  );
};

export default Component4;
