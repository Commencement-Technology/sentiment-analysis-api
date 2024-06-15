# Sentiment Analysis API

![Frame 7](https://github.com/carpodok/sentiment-analysis-api/assets/64840495/e95b74f9-f6b6-40bf-871b-0418cb8bd7fb)

## Overview
This repository provides a basic API for sentiment analysis, utilizing the OpenAI API for processing text inputs. The API categorizes sentiment as positive, negative, or neutral.

## Key Features
- ***Sentiment Analysis:*** Analyzes and categorizes text sentiment.
- ***OpenAI API Integration:*** Uses OpenAI API for text analysis.
- ***User Authentication:*** Users must be logged in to use the API.
- ***Customizable Categories:*** Users can customize sentiment categories. Defaults are `positive`, `negative`, and `neutral`.
- ***Rate Limiter:*** Limits usage to 100 requests per 15 minutes.
- ***Daily Usage Limit:*** Each user has 150 requests per day, renewed nightly at 00:00.
- ***Redis Integration:*** Utilizes Redis for efficient in-memory data storage and management.



## Used Technologies
- ***Express:*** Web framework for Node.js.
- ***Mongoose:*** MongoDB object modeling tool.
- ***jsonwebtoken:*** JSON Web Token implementation.
- ***bcryptjs:*** Library to hash passwords.
- ***dotenv:*** Module to load environment variables.
- ***express-rate-limit:*** Middleware to limit repeated requests.
- ***node-cron:*** Task scheduler for Node.js.
- ***nodemon:*** Utility to monitor for changes in Node.js applications.
- ***OpenAI API:*** For sentiment analysis.
- ***Redis:*** In-memory data structure store.


## Setup
#### 1.Clone the Repo:

```bash
git clone https://github.com/carpodok/sentiment-analysis-api.git
```

#### 2. Install Dependencies:
```bash
npm install
```

#### 3. Configure Environment Variables
Create a `.env`file in the root directory and add the following variables:

```bash
PORT=3000
OPENAI_API_KEY=your_api_key
MONGO_URI="your_mongo_uri"
JWT_SECRET=jwt_secret
REDIS_URL=redis://127.0.0.1:6379
```

#### 4. Start the server:

```bash
nem start
```

For development purpose with live reload, use this:

```bash
npm run dev
```


## License

This project is lisenced under the MIT License.
 
