const router = require("express").Router();
const bookRoutes = require("./books");

console.log("in routes/api/index.js");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
