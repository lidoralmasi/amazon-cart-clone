import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/homepage/home";
import Checkout from "./components/checkout/checkout";
import Login from "./components/login/login";
import { useStateValue } from "./components/redux/cartContext";
import { auth } from "./components/firbase/firebase";
import SignUp from "./components/signup/signup";

const App = () => {
  const [{ cartItems }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user)
        dispatch({
          type: "SET_USER",
          user: user,
        });
      else
        dispatch({
          type: "SET_USER",
          user: null,
        });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default App;
