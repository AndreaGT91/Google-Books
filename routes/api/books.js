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

module.exports = router;