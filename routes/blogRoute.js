import express from "express";
import verifyToken from "../services/auth.js";
import createBlog from "../controller/addBlog.js";
import upload from "../azuremulter/azuremulter.js";
import updateBlog from "../controller/updateBlog.js";
import likePost from "../controller/likePost.js";
import unlikePost from "../controller/unlikePost.js";
import addComment from "../controller/addComment.js";
import getAllBlog from "../controller/getAllblog.js";

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
export default router;
