const dotenv = require("dotenv");
dotenv.config();
const { createToken } = require("../Config/jwt");
const User = require("../Model/userModel");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.adminEmail) {
      if (password === process.env.adminPassword) {
        const token = createToken({ email });
        res.json(token);
      } else {
        res.send("incorrectpass");
      }
    } else {
      res.send("incorrectemail");
    }
  } catch (err) {
    console.log(err);
  }
};

const getusers = async (req, res) => {
  try {
    const userlist = await User.find({});
    res.json(userlist);
  } catch (err) {
    console.log(err);
  }
};

const deletion = async (req, res) => {
  try {
    const { userid } = req.body;
    const deleteUser = await User.deleteOne({ _id: userid });
    res.json(deleteUser);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  adminLogin,
  getusers,
  deletion,
};
