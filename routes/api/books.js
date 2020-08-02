const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const googleController = require("../../controllers/googleController");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/:id")
  .delete(booksController.remove);

router.route("/search/:keyword")
  .get(googleController.getGoogleBooks);

router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/books/:id")
  .delete(booksController.remove);

router.route("/books/search/:keyword")
  .get(googleController.getGoogleBooks);

router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/api/books/:id")
  .delete(booksController.remove);

router.route("/api/books/search/:keyword")
  .get(googleController.getGoogleBooks);

module.exports = router;