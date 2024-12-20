const User = require("../database/model/user");
const Blog = require("../database/model/blog");
const jwt = require("jsonwebtoken");
const cloudinary = require('../azuremulter/cloudinary')


require("dotenv").config();
const createBlog = async (req, res) => {
  try {
    // console.log(req.file.url.split("?"));
    const result = await cloudinary.uploader.upload(req.file.path);
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.json({ status: false });
    }

    const verifiedUser = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(verifiedUser);
    const userId = verifiedUser.id;
    const user = await User.findById(userId);

    const blog = {
      title: req.body.title,
      content: req.body.content,
      blogThumbnail: result.secure_url,
      createdBy: user._id,
    };
    const newBlog = new Blog(blog);
    await newBlog.save();

    user.blog.push(newBlog._id);
    user.save();
    res.status(200).json({ blog: blog, user: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Blog did not created" });
  }
};
module.exports = createBlog;
