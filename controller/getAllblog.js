const Blog = require("../database/model/blog");

const getAllBlog = async (req, res) => {
  const blogs = await Blog.find({})
    .sort({ createdAt: 1 })
    .populate(["likes.user", "comments.user"]);
  res.status(200).json(blogs);
};
module.exports = getAllBlog;
