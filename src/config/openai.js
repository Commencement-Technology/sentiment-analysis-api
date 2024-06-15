const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
  dangerouslyAllowBrowser: true,
});

module.exports = openai;
