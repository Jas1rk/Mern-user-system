import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginparentDiv">
      <h2>Sign in</h2>
      <div className="loginContainer">
        <form className="loginform-container">
          <input type="emal" name="email" id="" placeholder="Email" />
          <br />
          <br />

          <input type="password" name="password" id="" placeholder="Password" />
          <br />
          <br />

          <button>Login</button>
          <br />
          <br />
          <p>Don't you have an account ?<Link to="/register"> Register</Link></p>

        </form>
      </div>
    </div>
  );
};

export default Login;
