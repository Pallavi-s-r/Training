const NewBookModel = require("../models/newBookModel");
const AuthorModel= require("../models/authorModel");

const createNewBook = async function(req,res){
   let data = req.body;
   let savedData = await NewBookModel.create(data);
    res.send({msg:savedData});
}


//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const getBookByChetan = async function (req,res){
let allBooks = await NewBookModel.find({author_id : 1})
if(allBooks){
    res.send({msg:allBooks , condition : true})
}
}
   
module.exports.createNewBook = createNewBook;
module.exports.getBookByChetan = getBookByChetan;