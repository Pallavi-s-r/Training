const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel = require("../models/bookModel.js");
const bookController = require("../controllers/bookController.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBooks", bookController.createBooks  )

router.get("/getBooksData", bookController.getBooksData)

module.exports = router;