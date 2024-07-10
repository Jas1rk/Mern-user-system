const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const tokenCreation = (userId) => {
  const token = jwt.sign({ userId }, process.env.secret_key, {
    expiresIn: "1h",
  });
  return token;
};

const tokenVerify = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.send("Access-denied");
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.send("Access-denied");
  }

  jwt.verify(token, process.env.secret_key, (err, decoded) => {
    if (err) {
      return res.send("Authentication-filed");
    } else {
      next();
    }
  });
};

module.exports = {
  tokenCreation,
  tokenVerify,
};
