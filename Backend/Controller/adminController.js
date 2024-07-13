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
    console.log('ingottet keeeriii')
    const userlist = await User.find({});
    console.log('this is user list',userlist)
    res.json(userlist);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  adminLogin,
  getusers,
};
