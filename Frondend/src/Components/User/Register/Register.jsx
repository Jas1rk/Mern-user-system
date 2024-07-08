import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="parentDiv">
      <h2>Sign up</h2>
      <div className="childContainer">
        <form className="form-container">
          <input type="text" name="username" id="" placeholder="Username" />
          <br />
          <br />
          <input type="email" name="emal" id="" placeholder="Email" />
          <br />
          <br />
          <input type="number" name="mobile" id="" placeholder="Mobile" />
          <br />
          <br />
          <input type="password" name="password" id="" placeholder="Password" />
          <br />
          <br />
          <input
            type="text"
            name="confirmPassword"
            id=""
            placeholder="Confirm password"
          />
          <br />
          <br />
          <button>Register</button>
          <br />
          <br />
          <p>Already have an account ? <Link to ="/login">Login</Link></p>
        </form>
      
            
           
        
      </div>
    </div>
  );
};

export default Register;
