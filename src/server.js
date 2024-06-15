require("dotenv").config();
const express = require("express");
const app = express();
const User = require("./models/User");
const { resetRequestCounts } = require("./jobs/cronJobs");

require("./config/openai");
require("./config/db");

app.enable("trust proxy");
app.use(express.json());
app.use(require("./middlewares/rateLimiter"));

resetRequestCounts();

app.use("/", require("./routes/sentimentRoutes"));
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/userRoutes"));
app.use("/", async (req, res) => {
  res.send("Hello Main Page!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`));
