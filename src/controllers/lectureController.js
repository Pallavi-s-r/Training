const LectureBookModel = require('../models/lectureBooks')
const AuthorModel = require('../models/authorModel');

const createAuthor = async function(req,res){
   
    let data = req.body;
    const createdAuthors = await AuthorModel.create(data);
    res.send({msg:createdAuthors})
    
   
}


const createNewBooks = async function(req,res){
    let data = req.body;
    const createdBooks = await LectureBookModel.create(data);
    res.send({msg:createdBooks})
}


//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )


const bookOfChetan = async function(req,res){
    const book = await AuthorModel.findOne({author_name : "Chetaaan Bhagat"})
res.send({msg:book});
if(!author){
    res.send({ msg: "No books found for Chetan Bhagat" });
    return;

}
}


//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)


const authorName = async function(req,res){
const book = await LectureBookModel.findOneAndUpdate({bookName:"Two States"},{$set:{price:100}},{new:true},{timeout:30000}).exec();
 let author = await AuthorModel.findById(book.author_id).exec();
res.send({
    author_name :author.author_name,
    price:book.price
})
}


  
const getBooksByPriceRange = async function(req, res) {

      // books with prices between 50 and 100
      let books = await LectureBookModel.find({ price: { $gte: 50, $lte: 100 } }).exec();
  
      //author IDs of the books
      let authorIds = books.map(book => book.author_id);
  
      //   get the author names corresponding to the author IDs
      let authors = await AuthorModel.find({ author_id: { $in: authorIds } }).exec();
  
      //map of author IDs and author names for easy lookup
      let authorMap = {};
      authors.forEach(author => {
        authorMap[author.author_id] = author.author_name;
      });
  
      // Create an array to store the author names of the respective books
      let authorNames = books.map(book => authorMap[book.author_id]);
  
      //  array of author names in the response
      res.send({ author_names: authorNames });

  };

  const updatePrice = async function(req, res) {
 
      // Find the book by title and update its price
      let book = await LectureBookModel.findOneAndUpdate(
        { bookName: "Two states" },
        { $set: { price: 100 } },
        { new: true }
      );
  
      if (!book) {
        return res.send({ error: "Book not found" });
      }
  
      // Find the author of the book using the author_id field
      let author = await LectureBookModel.findOne({ author_id: book.author_id });
  
      if (!author) {
        return res.send({ error: "Author not found" });
      }
  
      // Send back the author name and updated price in the response
      res.send({
        author_name: author.author_name,
        price: book.price
      });
   
  };
  
  
module.exports.authorName = authorName;

module.exports.bookOfChetan=bookOfChetan
module.exports.createAuthor= createAuthor;
module.exports.createNewBooks= createNewBooks;
module.exports.updatePrice= updatePrice;
module.exports.getBooksByPriceRange= getBooksByPriceRange;

