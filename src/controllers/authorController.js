const { count } = require("console")
const AuthorModel= require("../models/authorModel")
const NewBookModel= require("../models/newBookModel");

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData});
}

//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 


const getbookPrice = async function (req, res) {
const bookList = await NewBookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
let author = author.map(author => author.author_id === bookList.author_id)
res.send({msg:bookList})
}

  
  
  
module.exports.createAuthor = createAuthor;
// module.exports.getAuthorName = getAuthorName;
module.exports.getbookPrice = getbookPrice;