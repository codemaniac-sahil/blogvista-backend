const User = require("../database/model/user");

const userInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: "User did not exit" });
  }
};
module.exports = userInfo;
