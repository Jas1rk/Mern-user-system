const express = require("express");
const adminRoute = express.Router();
const adminController = require("../Controller/adminController");
const { verifyToken } = require("../Config/jwt");

const { adminLogin, getusers, deletion, adminEditUser } = adminController;

adminRoute
  .post("/login", adminLogin)
  .get("/getuser", verifyToken, getusers)
  .delete("/delete", verifyToken, deletion)
  .put("/edit", verifyToken, adminEditUser);

module.exports = adminRoute;
