import User from "../database/model/user.js";
import bcrypt from "bcrypt";

const handleSignUp = async (req, res) => {
  try {
    const image = req.file ? req.file.url : null;
    if (
      !(
        req.body.email &&
        req.body.password &&
        req.body.firstname &&
        req.body.lastname
      )
    ) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email: req.body.email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    const salt = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      profilePic: image,
    });
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    console.log("Gott an error", error);
  }
};
export default handleSignUp;
