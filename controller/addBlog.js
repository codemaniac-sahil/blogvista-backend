const User = require("../database/model/user");
const Blog = require("../database/model/blog");

const createBlog = async (req, res) => {
  try {
    const image = req.file ? req.file.url : null;
    const userId = req.user.id;

    const user = await User.findById(userId);

    const blog = {
      title: req.body.title,
      content: req.body.content,
      blogThumbnail: image,
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
