const cron = require("node-cron");
const User = require("../models/User");

const resetRequestCounts = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("Resetting request counts");
    try {
      await User.updateMany({}, { $set: { requestCount: 0 } });
      console.log("Request counts reset successfully");
    } catch (error) {
      console.error("Error resetting request counts:", error);
    }
  });
};

module.exports = {
  resetRequestCounts,
};
