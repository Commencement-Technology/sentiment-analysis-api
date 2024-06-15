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
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `jsonwebtoken`: JSON Web Token implementation.
- `bcryptjs`: Library to hash passwords.
- `dotenv`: Module to load environment variables.
- `express-rate-limit`: Middleware to limit repeated requests.
- `node-cron`:Task scheduler for Node.js.
- `nodemon`: Utility to monitor for changes in Node.js applications.
- `openai`: For sentiment analysis.
- `redis`: In-memory data structure store.

## Endpoints

- ### POST /register

```bash
http://localhost:3000/register
```

Headers:
```bash
Content-Type: application/json
```

Request:
```bash
{
    "name": "ali",
    "email":"a@gmail.com",
    "password":"123456"
}
```

Response:
```bash
{
  "success": true,
  "token": ""
}
```

<hr>

- ### POST /login

```bash
http://localhost:3000/login
```

Headers:
```bash
Content-Type: application/json
```

Request:
```bash
{
    "email":"a@gmail.com",
    "password":"123456"
}
```

Response:
```bash
{
  "success": true,
  "token": ""
}
```

<hr>

- ### POST /analyze

```bash
http://localhost:3000/analyze
```

Headers:
```bash
Content-Type: application/json
Authorization: Bearer your_access_token_here
```

Request:
```bash

{
    "text": "The customer service was not good enough, and I am very disappointed with the experience."
}
```

Response:
```bash
{
  "success": true,
  "data": "Negative"
}
```
<hr>

- ### POST /custom-sentiment-categories

```bash
http://localhost:3000/custom-sentiment-categories
```

Headers:
```bash
Content-Type: application/json
Authorization: Bearer your_access_token_here
```

Request:
```bash
{
  "categories": ["Happy", "Sad", "Angry"]
}
```

Response:
```bash
{
  "success": true,
  "data": [
    "Happy",
    "Sad",
    "Angry"
  ]
}
```
<hr>

- ### GET /profile

```bash
http://localhost:3000/profile
```

Headers:
```bash
Content-Type: application/json
Authorization: Bearer your_access_token_here
```

Response:
```bash
{
  "success": true,
  "data": {
    "_id": "6666059d80df1c6f48e43c1f",
    "name": "ali",
    "email": "a@gmail.com",
    "customSentimentCategories": [
      "Happy",
      "Sad",
      "Angry"
    ],
    "requestCount": 1,
    "requestLimit": 2,
    "createdAt": "2024-06-09T19:42:21.608Z",
    "__v": 1
  }
}
```
<hr>
<br>


## Setup
### 1.Clone the Repo:

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
 
