const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secret_key = process.env.secret_key

const createToken = (userId) => {
  const token = jwt.sign({ userId },secret_key , {
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.send("Access_denied");
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.send("Access_denied");
  }

  jwt.verify(token, secret_key , (err, decoded) => {
    if (err) {
      return res.send("Authentication_filed");
    } else {  
      next();
    }
  });
};

module.exports = {
  createToken,
  verifyToken,
};
