const express = require('express');
const router = express.Router();
const bookController =require("../controllers/bookController")
const lectureController = require("../controllers/lectureController")
const novelController = require("../controllers/novelController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api! --- Pallavi")
})

router.post('/createBooks' , bookController.createBooks);
router.get('/bookData', bookController.bookData)
router.get('/bookNameWithAuthorName', bookController.bookNameWithAuthorName)
router.post('/booksByYear', bookController.booksByYear)
router.patch('/addPriceField', bookController.addPriceField);
router.get('/getINRBooks',bookController.getINRBooks);
router.get('/getStocks',bookController.getStocks);


router.post('/createNewBooks' , lectureController.createNewBooks);
router.post('/createAuthor' , lectureController.createAuthor);
router.get('/bookOfChetan',lectureController.bookOfChetan);
router.get('/updatePrice', lectureController.updatePrice)
router.get('/getBooksByPriceRange', lectureController.getBooksByPriceRange);
router.put('/getIsHardCover', novelController.getisHardCover)
router.put('/updatePrice', novelController.updatePrice)
module.exports = router;