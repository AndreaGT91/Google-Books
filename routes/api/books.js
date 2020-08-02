const router = require("express").Router();
const booksController = require("../../controllers/booksController");

console.log("in routes/api/books.js");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/:id")
  .delete(booksController.remove);

router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/books/:id")
  .delete(booksController.remove);

router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/api/books/:id")
  .delete(booksController.remove);

module.exports = router;