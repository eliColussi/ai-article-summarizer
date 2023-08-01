// config.js
const dotenv = require("dotenv");
dotenv.config();

// Access environment variables
const rapidApiKey = process.env.API_KEY;

module.exports = {
  rapidApiKey,
};
