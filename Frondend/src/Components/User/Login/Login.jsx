import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import UseForm from "../../../Hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginVerify } from "../../../Redux/User/userThunk";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";

const Login = () => {
  const [formValue, handleInput] = UseForm({
    email: "",
    password: "",
  });
  const { email, password } = formValue;
  const navigate = useNavigate();
  const [showpass, setShowPass] = useState();
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  console.log("this is userdata", userData);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginVerify({ email, password, toast }));
  };

  useEffect(() => {
    if (userData) {
      navigate("/profile");
    }
  }, [userData]);

  return (
    <>
      <Toaster />
      <div className="loginparentDiv">
        <h2>Sign in</h2>
        <div className="loginContainer">
          <form className="loginform-container" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInput}
            />
            <br />
            <br />
            <div className="loginpass-container">
              <input
                type={showpass ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInput}
              />
              {showpass ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="show-icon"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="show-icon"
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
            <br />
            <br />

            <button>Login</button>
            <br />
            <br />
            <p>
              Don't you have an account ?<Link to="/register"> Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
