const User = require("../database/model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

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
  const token = jwt.sign({ id: user._id, username: user.username }, secret);
  // res.cookie("jwt", token, {
  //   httpOnly: true,
  // });
  res.json({ token });
};
module.exports = login;
