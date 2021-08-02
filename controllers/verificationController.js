require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.send(401);
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

exports.verifyUser = verifyUser;
