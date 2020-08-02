const axios = require ("axios");
require("dotenv").config();

module.exports = {
  getGoogleBooks: function(req, res) {
    const urlGoogle = `https://www.googleapis.com/books/v1/volumes?q=${req.params.keyword}` +
      `&key=${process.env.GOOGLE_KEY}`;
    console.log("GOOGLE URL: " + urlGoogle);
    return axios.get(urlGoogle);
  }
};