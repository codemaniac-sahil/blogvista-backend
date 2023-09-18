const express = require("express");

const userInfo = require("../controller/userInfo");

const router = express.Router();

router.get("/getuserinfo/:id", userInfo);

module.exports = router;
