import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  //Gets all books from googlebooks
  getSearchedBook: function (query) {
    return axios.get(BASEURL + query);
  },
  //saves a book to the database
  saveBook: function (bookData) {
    console.log(bookData);

    return axios.post("/api/books", bookData);
  },
};
