import { useCallback, useState } from "react";
import DisclaimerComponent from "./DisclaimerComponent.jsx";

const LearningDay8 = () => {
  const [cart, setCart] = useState(0);

  const cartItemsCount = 5;

  const disclaimerFunction = useCallback(() => {
    console.log("clicked disclaimer func");
    setCart(0);
  }, []);

  return (
    <div>
      <h2>Optimization - useMemo, useCallback</h2>
      <div>
        <div>Cart : {cart}</div>
        <button
          onClick={() => {
            setCart(cart + 1);
          }}
        >
          Increase Quantity
        </button>
        <br />
        <DisclaimerComponent disclaimerFunction={disclaimerFunction} />
      </div>
    </div>
  );
};

export default LearningDay8;
