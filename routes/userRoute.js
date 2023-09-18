import express from "express";

import userInfo from "../controller/userInfo.js";

const router = express.Router();

router.get("/getuserinfo/:id", userInfo);

export default router;
