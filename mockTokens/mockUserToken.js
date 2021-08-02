const jwt = require("jsonwebtoken");
// require("dotenv").config();
// dotenv.config();

function generateAccessToken() {
  return jwt.sign("403f220c3d413fe9cb0b36142ebfb35d", "my_token_secret");
}

console.log(generateAccessToken());

module.exports = generateAccessToken;
