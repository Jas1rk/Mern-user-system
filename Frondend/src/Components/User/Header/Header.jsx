import React, { useCallback } from "react";
import { logout } from "../../../Redux/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/login");
  }, [dispatch]);

  return (
    <header>
      <div className="navBar">
        <h2>Profile</h2>
        <div className="logOut">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
