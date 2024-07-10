import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseForm from "../../../Hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { registration } from "../../../Redux/User/userThunk";
import "./Register.css";

const Register = () => {
  const [formValues, handleInput] = UseForm({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, mobile, password, confirmPassword } = formValues;
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registration({
      username,
      email,
      mobile,
      password,
      confirmPassword,
      toast,
    });
    if (response === "success") {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <>
      <Toaster />
      <div className="parentDiv">
        <h2>Sign up</h2>
        <div className="childContainer">
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleInput}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInput}
            />
            <br />
            <br />
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              value={mobile}
              onChange={handleInput}
            />
            <br />
            <br />
            <div className="password-container">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInput}
              />
              {show ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="eye-icon"
                  onClick={() => setShow(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="eye-icon"
                  onClick={() => setShow(true)}
                />
              )}
            </div>
            <br />
            <br />
            <div className="password-container">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleInput}
              />
              {showConfirm ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="eye-icon"
                  onClick={() => setShowConfirm(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="eye-icon"
                  onClick={() => setShowConfirm(true)}
                />
              )}
            </div>

            <br />
            <br />
            <button>Register</button>
            <br />
            <br />
            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
