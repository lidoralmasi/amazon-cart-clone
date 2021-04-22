import React from "react";
import "./subTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../redux/cartContext";
import { getCartTotal } from "../redux/cartReducer";

const SubTotal = () => {
  const [{ cartItems }] = useStateValue();
  const cartTotal = getCartTotal(cartItems);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartItems.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={cartTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
