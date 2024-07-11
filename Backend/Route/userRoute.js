const express = require("express");
const userRoute = express.Router();
const userController = require("../Controller/userController");

const { registerPost, loginPost, editProfile } = userController;

userRoute
  .post("/register", registerPost)
  .post("/login", loginPost)
  .post("/edit", editProfile);

module.exports = userRoute;
