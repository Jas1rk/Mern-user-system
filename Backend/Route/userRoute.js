const express = require("express");
const userRoute = express.Router();
const userController = require("../Controller/userController");
const upload = require("../Config/multer");
const { verifyToken } = require("../Config/jwt");

const { registerPost, loginPost, editProfile } = userController;

userRoute
  .post("/register", registerPost)
  .post("/login", loginPost)
  .post("/editprofile",verifyToken, upload.single("image"), editProfile);

module.exports = userRoute;
