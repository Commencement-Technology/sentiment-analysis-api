const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.setCustomSentimentCategories = async (req, res) => {
  try {
    const { categories } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.customSentimentCategories = categories;
    await user.save();

    res.status(200).json({
      success: true,
      data: user.customSentimentCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
