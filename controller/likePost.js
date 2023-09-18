const Blog = require("../database/model/blog");

const likePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    // Check if the post has already been liked

    if (
      post.likes.filter((like) => like.user.toString() === req.body.userId)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }
    post.likes.unshift({ user: req.body.userId });
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
module.exports = likePost;
