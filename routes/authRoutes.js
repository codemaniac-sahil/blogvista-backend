import express from "express";
import handleSignUp from "../controller/signup.js";
import upload from "../azuremulter/azuremulter.js";
import login from "../controller/login.js";

const router = express.Router();

router.post("/signup", upload.single("img"), handleSignUp);
router.post("/login", login);

export default router;
