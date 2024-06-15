const express = require("express");
const { analyzeSentiment } = require("../controllers/sentimentController");
const verifyAuth = require("../middlewares/verifyAuth");
const rateLimiter = require("../middlewares/rateLimiter");
//const rateLimiter = require("../middlewares/rateLimiter");

const router = express.Router();

router.post("/analyze", verifyAuth, rateLimiter, analyzeSentiment);

module.exports = router;
