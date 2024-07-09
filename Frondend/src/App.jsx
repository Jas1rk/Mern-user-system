import { useState } from "react";
import "./App.css";
import {
  Profile,
  Login,
  Register,
  AdminLogin,
  AdminDashboard,
} from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/admin/adminhome" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
