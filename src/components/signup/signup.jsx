import React, { useState } from "react";
import "./signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firbase/firebase";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazonLogo"
        />
      </Link>
      <div className="signup__container">
        <h1>Sign Up</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </form>
        <p>
          By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="signup__submitButton" onClick={register}>
          Sign up to Amazon
        </button>
      </div>
    </div>
  );
};

export default SignUp;
