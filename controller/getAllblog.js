import Blog from "../database/model/blog.js";

const getAllBlog = async (req, res) => {
  const blogs = await Blog.find({}).populate(["likes.user", "comments.user"]);
  res.status(200).json(blogs);
};
export default getAllBlog;
