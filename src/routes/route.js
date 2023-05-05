const express = require('express');
const router = express.Router();

const middleWares = require("../middleWares/middleWare")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const classController = require("../controllers/classController");
const studentController = require("../controllers/studentController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post('/createClass', classController.createClass);
router.post('/createStudent', studentController.createStudent);

router.get('/deleteStudent', classController.deleteStudent);
router.get('/getClassDetails', classController.getClassDetails);
router.get('/getClassWithStudentDetails',classController.getClassWithStudentDetails);
router.get('/getStudents', studentController.getStudents);

module.exports = router;

//xyz singh stid-95873247,fav maths, av -67
//class -abc , classid 3240, 7612