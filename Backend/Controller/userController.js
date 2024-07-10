const User = require("../Model/userModel");
const bcrypt = require("bcrypt");

const registerPost = async (req, res) => {
  try {
    const { username, email, mobile, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      const passHash = await bcrypt.hash(password, 10);
      const newUser = new User({
        username: username,
        email: email,
        mobile: mobile,
        password: passHash,
      });
      const createdUser = await newUser.save();
      res.json(createdUser);
    } else {
      res.send("userExist");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerPost,
};
