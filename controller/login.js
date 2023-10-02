const User = require("../database/model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const { createSecretToken } = require("../tokenGeneration/generateToken");

env.config();

const secret = process.env.TOKEN_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(400).json({ message: "All input is required" });
  }
  const user = await User.findOne({ email });
  if (!(user && (await bcrypt.compare(password, user.password)))) {
    return res.status(404).json({ message: "Invalid credentials" });
  }
  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: true,
  });
  res.json({ token });
};
module.exports = login;
