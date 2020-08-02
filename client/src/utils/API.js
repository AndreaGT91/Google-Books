import axios from "axios";
import "dotenv/config.js";

export default {

  // Use provided keyword(s) to query Google Books
  getGoogleBooks: function(keywords) {
    // Replace spaces in array with + sign
    const keyword = keywords.replace(/\s/g, "+");
    return axios.get("/api/books/search/" + keyword); 
  },
  
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },

  // Deletes the saved book with the given id
  deleteSavedBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // Saves a book to the database
  createSavedBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};