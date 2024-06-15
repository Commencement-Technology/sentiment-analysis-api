const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 100, // 100 requests per 15 minutes
  message: "Too many requests from this IP, please try again later",
});

module.exports = limiter;
