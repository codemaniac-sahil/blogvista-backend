const express = require("express");
const verifyToken = require("../services/auth");
const createBlog = require("../controller/addBlog");
const upload = require("../azuremulter/azuremulter");
const updateBlog = require("../controller/updateBlog");
const likePost = require("../controller/likePost");
const unlikePost = require("../controller/unlikePost");
const addComment = require("../controller/addComment");
const getAllBlog = require("../controller/getAllblog");

const router = express.Router();

router.post("/addpost", upload.single("thumbnail"), verifyToken, createBlog);
router.put(
  "/updateblog/:blogid",
  upload.single("thumbnail"),
  verifyToken,
  updateBlog
);
router.put("/like/:id", likePost);
router.put("/unlike/:id", unlikePost);
router.put("/addcomment/:id", addComment);
router.get("/getblogs", getAllBlog);
module.exports = router;
