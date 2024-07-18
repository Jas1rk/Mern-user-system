import { useState } from "react";
import "./App.css";
import {
  Profile,
  Login,
  Register,
  AdminLogin,
  AdminDashboard,
  IsUser,
  IsAdmin,
} from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/profile"
            element={
              <IsUser>
                <Profile />
              </IsUser>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route
            exact
            path="/admin/adminhome"
            element={
              <IsAdmin>
                <AdminDashboard />
              </IsAdmin>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
