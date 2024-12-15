const express = require("express");
const router = express.Router();
const {
  getSearchBooks,
  getBookById,
  getBooksByCategory,
} = require("../../controllers/booksController/booksController");

router.post("/searchBooks", getSearchBooks);
router.post("/searchBookById/:id", getBookById);
router.post("/getBooksByCategory/:category", getBooksByCategory);

module.exports = router;
