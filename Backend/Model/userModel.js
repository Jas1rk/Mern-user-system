const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
  },
  password: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },
  image: {
    type: String,
    default: undefined,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
