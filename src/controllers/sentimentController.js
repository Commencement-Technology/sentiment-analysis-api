const openai = require("../config/openai");
const SentimentAnalysis = require("../models/SentimentAnalysis");
//const redisClient = require("../config/redis");
const User = require("../models/User");

exports.analyzeSentiment = async (req, res) => {
  try {
    const { text } = req.body;
    const cacheKey = `sentiment:${text}`;

    const user = await User.findById(req.user.id);

    if (user.requestCount >= user.requestLimit) {
      return res.status(429).json({
        success: false,
        message: "Request limit reached",
      });
    }

    // Check if sentiment analysis result is cached
    /* const cachedSentiment = await redisClient.get(cacheKey);
    if (cachedSentiment) {
      console.log("Cache hit");
      user.requestCount += 1;
      await user.save();
      return res.status(200).json({
        success: true,
        data: cachedSentiment,
      });
    } */

    const categories =
      user && user.customSentimentCategories.length > 0
        ? user.customSentimentCategories
        : ["Positive", "Negative", "Neutral"];

    const categoriesStr = categories.join(", ");
    console.log(categoriesStr);

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a sentiment analysis assistant." },
        {
          role: "user",
          content: `Analyze the sentiment of this text: "${text}". Respond with one of the following categories: ${categoriesStr}.`,
        },
      ],
      max_tokens: 60,
    });

    const sentiment = response.choices[0].message.content.trim();

    const sentimentAnalysis = new SentimentAnalysis({
      user: req.user.id,
      text,
      sentiment,
    });

    user.requestCount += 1;
    await sentimentAnalysis.save();

    /*  await redisClient.set(cacheKey, sentiment, {
      EX: 3600,
    }); */

    res.status(200).json({
      success: true,
      data: sentiment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Internal Server Error ${error}`,
    });
  }
};
