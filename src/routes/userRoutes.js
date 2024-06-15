const express = require("express");
const {
  getUserProfile,
  setCustomSentimentCategories,
} = require("../controllers/userController");
const verifyAuth = require("../middlewares/verifyAuth");

const router = express.Router();

router.get("/profile", verifyAuth, getUserProfile);
router.post(
  "/custom-sentiment-categories",
  verifyAuth,
  setCustomSentimentCategories
);

module.exports = router;
