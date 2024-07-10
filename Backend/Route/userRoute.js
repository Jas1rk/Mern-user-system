const express = require("express");
const userRoute = express.Router();
const userController = require("../Controller/userController");

const { registerPost, loginPost } = userController;

userRoute.post("/register", registerPost).post("/login", loginPost);

module.exports = userRoute;
