import axios from "axios";
require("dotenv").config();

function getGoogleBooks(keywords) {
  // Replace spaces in array with + sign
  const keyword = keywords.replace(/\s/g, "+");
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${process.env.REACT_APP_GOOGLE_KEY}`);
};

export default getGoogleBooks;