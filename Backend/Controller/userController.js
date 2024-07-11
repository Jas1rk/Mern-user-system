const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const { createToken } = require("../Config/jwt");

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

const loginPost = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      const comparePassword = await bcrypt.compare(password, findUser.password);
      if (comparePassword) {
        const userData = {
          _id: findUser._id,
          username: findUser.username,
          email: findUser.email,
          mobile: findUser.mobile,
          password: findUser.password,
          image: findUser.image,
        };

        const token = createToken(userData._id);
        res.json({ userData, token });
      } else {
        res.send("passwordIncorrect");
      }
    } else {
      res.send("userNotExist");
    }
  } catch (err) {
    console.log(err);
  }
};

const editProfile = async (req, res) => {
  try {
    const { userID, username, email, mobile } = req.body;
    console.log("this is from body ", userID, username, email, mobile);
    // const file = req.file
    // const udpateUserData = {
    //   username:username,
    //   email:email,
    //   mobile:mobile,
    //   ...(file && {image:file.originalname})
    // }
    // const updadeUser =  await User.updateOne({_id:userID},udpateUserData)
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerPost,
  loginPost,
  editProfile,
};
