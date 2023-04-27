const BookModel = require("../models/bookModel.js");


const createBooks = async function(req, res){
    let data = req.body
    let savedData = await BookModel.create(data);
    res.send({msg: savedData})
}

const getBooksData = async function(req,res){
    let allBooks = await BookModel.find();
    res.send({msg: allBooks});
}


module.exports.createBooks = createBooks;
module.exports.getBooksData = getBooksData;

