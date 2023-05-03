const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthors", authorController.createAuthors  )

//router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBooks", bookController.createBooks  )

router.get("/updatePrice", bookController.updatePrice)

router.get("/getBookByChetan", authorController.getBookByChetan)

router.get('/getBooksByPriceRange', bookController.getBooksByPriceRange)

router.post('/createPublisher', publisherController.createPublisher);

router.get('/getPublisherData', publisherController.getPublisherData);

router.put('/addIsHardCover', bookController.addIsHardCover)
router.put('/updatePriceByAuthorRating', bookController.updatePriceByAuthorRating)
// router.put('/updateIsHardCoverKey', bookController.updateIsHardCoverKey)
module.exports = router;