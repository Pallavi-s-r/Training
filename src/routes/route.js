const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel = require("../models/bookModel.js");
const bookController = require("../controllers/bookController.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBooks", bookController.createBooks  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBookList", bookController.getBookList)

router.post("/getBooksInYear", bookController.getBooksInYear)

router.get('/getParticularBooks',bookController.getParticularBooks)

router.get('/getXINRBooks', bookController.getXINRBooks)

router.get('/randomBooks ', bookController.randomBooks)

module.exports = router;
