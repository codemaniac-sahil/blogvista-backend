const Blog = require("../database/model/blog");

const getAllBlog = async (req, res) => {
  const blogs = await Blog.find({})
    .populate(["likes.user", "comments.user"])
    .sort({ createdAt: -1 });
  res.status(200).json(blogs);
};
module.exports = getAllBlog;
