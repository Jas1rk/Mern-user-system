import React from "react";
import "./Adminlogin.css"

const Adminlogin = () => {
  return (
    <div className="adminparentDiv">
      <h2>Admin Login</h2>
      <div className="adminContainer">
        <form className="adminform-container">
          <input type="emal" name="email" id="" placeholder="Email" />
          <br />
          <br />

          <input type="password" name="password" id="" placeholder="Password" />
          <br />
          <br />

          <button>Login</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
