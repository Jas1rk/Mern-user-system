import React, { useEffect } from "react";
import { adminLogin } from "../../../Redux/Admin/adminThunk";
import UseForm from "../../../Hooks/useForm";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Adminlogin.css";

const Adminlogin = () => {
  const [formValue, handleInput] = UseForm({ email: "", password: "" });
  const { email, password } = formValue;
  const token = useSelector((state) => state.admin.jwttoken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin/adminhome");
    }
  }, [token]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(adminLogin({ email, password, toast }));
  };

  return (
    <>
      <Toaster />
      <div className="adminparentDiv">
        <h2>Admin Login</h2>
        <div className="adminContainer">
          <form className="adminform-container" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInput}
              placeholder="Email"
            />
            <br />
            <br />

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInput}
              placeholder="Password"
            />
            <br />
            <br />

            <button>Login</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
