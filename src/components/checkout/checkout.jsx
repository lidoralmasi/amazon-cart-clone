import React from "react";
import { useStateValue } from "../redux/cartContext";
import "./checkout.css";
import CheckoutProduct from "../checkoutProduct/checkoutProduct";
import SubTotal from "../subTotal/subTotal";

const Checkout = () => {
  const [{ cartItems, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {cartItems.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              key={item.id}
              qty={item.qty}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
