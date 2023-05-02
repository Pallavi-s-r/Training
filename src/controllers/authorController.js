const AuthorModel = require("../models/authorModel.js");

const createAuthors = async function(req,res){
    
        let author = req.body;
        let authorCreated = await AuthorModel.create(author);
 res.send({data: authorCreated})
    
}

const getBookByChetan = async function(req, res) {
  let author = await AuthorModel.findOne({ author_name: 'Chetan Bhagat' },null, { timeout: 30000 }).populate('books');
  
 
if (!author) {
      res.send({ msg: "No books found for Chetan Bhagat" });
      return;
  }
  res.send({ msg: author.books });
};

module.exports.createAuthors = createAuthors;
module.exports.getBookByChetan = getBookByChetan;
