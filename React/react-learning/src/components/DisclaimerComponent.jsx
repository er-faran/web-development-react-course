import { memo } from "react";

const DisclaimerComponent = ({ disclaimerFunction }) => {
  console.log("I am Disclaimer Comp");
  return (
    <div>
      The price and availability of items at Amazon.in are subject to change.
      The shopping cart is a temporary place to store a list of your items and
      reflects each item's most recent price. Do you have a promotional code?
      We'll ask you to enter your claim code when it's time to pay.
      <button onClick={disclaimerFunction}>reset cart</button>
    </div>
  );
};

export default memo(DisclaimerComponent);
