const User = require("../database/model/user");
const Blog = require("../database/model/blog");

const createBlog = async (req, res) => {
  try {
    console.log(req.file.url.split("?"));
    const image = req.file ? req.file.url.split("?")[0] : null;
    const userId = req.user.id;

    const user = await User.findById(userId);

    const blog = {
      title: req.body.title,
      content: req.body.content,
      blogThumbnail: image,
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
