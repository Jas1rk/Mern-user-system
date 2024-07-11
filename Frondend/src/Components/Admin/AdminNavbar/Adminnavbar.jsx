import React, { useCallback } from "react";
import "./Adminnavbar.css";
import { adminLout } from "../../../Redux/Admin/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Adminnavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(adminLout());
    navigate("/admin");
  }, [dispatch]);

  return (
    <header>
      <div className="adminNavBar">
        <h2>Admin Dashboard</h2>
        <div className="AdminlogOut">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Adminnavbar;
