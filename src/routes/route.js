const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const BookController = require("../controllers/bookController");
const BookModel = require("../models/bookModel.js");
const AuthorModel = require("../models/authorModel.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 router.post('/createAuthors',AuthorController.createAuthors);

 router.post('/createBooks', BookController.createBooks)

 router.get('/getBookByChetan', AuthorController.getBookByChetan)
 
 router.post('/updatePrice', BookController.updatePrice);

router.get('/getBooksByPriceRange', BookController.getBooksByPriceRange)
module.exports = router;