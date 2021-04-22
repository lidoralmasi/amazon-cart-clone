import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "../redux/cartContext";

const CheckoutProduct = ({ id, title, image, price, rating, qty }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const onQtyChange = (e) => {
    if (e.target.value > 0) {
      cartItems.map((item) => {
        if (id === item.id) {
          item.qty = e.target.value;
        }
      });
      dispatch({
        type: "SET_CART_TOTAL",
      });
    } else if (
      window.confirm(`are you sure you want to remove this item from cart?`)
    ) {
      dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
      });
    }
  };

  const removeFromCart = () => {
    if (
      window.confirm(`are you sure you want to remove this item from cart?`)
    ) {
      dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
      });
    }
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <input
          className="checkoutProduct__qtyInput"
          type="number"
          name="qty"
          min="0"
          max="20"
          value={qty}
          onChange={(e) => onQtyChange(e)}
        />
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
