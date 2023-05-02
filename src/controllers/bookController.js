const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    
    if(req.body.author_id === undefined){
        res.send("Author_id is not present");
    }
    else{ const isValidAuthor = await authorModel.exists({ _id: req.body.author_id });
    if (!isValidAuthor) {
      res.status(400).send("The author is not present.");
    } 
        let book = req.body;
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook;
module.exports.getBooksData= getBooksData;
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails;
