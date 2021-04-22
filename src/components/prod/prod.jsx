import React from "react";
import "./prod.css";
import { useStateValue } from "../redux/cartContext";

const Prod = ({ id, title, image, price, rating, qty }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        image,
        price,
        rating,
        qty,
      },
    });
  };

  return (
    <div className="prod">
      <div className="prod__info">
        <p>{title}</p>
        <p className="prod__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="prod__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Prod;
