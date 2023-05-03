const BookModel = require("../models/bookModel.js");
const AuthorModel = require("../models/authorModel.js");
const PublisherModel = require("../models/publisherModel.js")

const createBooks = async function(req,res){
   
        let books = req.body;
        let bookCreated = await BookModel.create(books);
 res.send({data: bookCreated})
    
}

// const getBooks = async function(req,res){
//   let books = await BookModel.find();
//   res.send({msg:books});
// }

const getBooks = async function(req, res) {
  try {
    // Retrieve all books from the database
    const books = await BookModel.find().populate('LibraryAuthor');
    
    // Return the books as a response
    return res.send({ books });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

const updatePrice = async function(req, res) {
 
    // Find the book by title and update its price
    let book = await BookModel.findOneAndUpdate(
      { name: "Two states" },
      {$set:{ price: 100 }}, null, { timeout: 30000 }
    );

    // Find the author of the book using the author_id field in the book schema
    let author = await AuthorModel.findById(book.author_id);

    // Send back the author name and updated price in the response
    res.send({
      author_name: author.author_name,
      price: book.price
    });
 
};



const getBooksByPriceRange = async function(req, res) {
  
    // Find all books that cost between 50-100 (inclusive)
//     const books = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 });

//     // Get the author names corresponding to the author IDs
//     const authorNames = await Promise.all(books.map(async book => {
//       const author = await AuthorModel.findById(book.author_id);
//       return author.author_name;
//     }));

//     // Create a response object with the author names
//     const result = { author_names: authorNames };

//     // Send the response back
//     res.send(result);


const books = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).populate('author_id', 'author_name');

// Extract the author names from the result
const authorNames = books.map(book => book.author_id.author_name);

// Create a response object with the author names
const response = { author_names: authorNames };

// Send the response back
res.send(response);

 
};

const addIsHardCover = async function(req,res) {

  // Update all books in the database to add the "addIsHardCover" property with a default value of "unknown"
 let newAdded = await BookModel.updateMany({}, { $set: { isHardCover:false}},{upsert:true});

  console.log('Successfully added the "addIsHardCover" property to the Book schema.',newAdded);
  let populatedBooks = await BookModel.find().populate('LibraryAuthor').populate('BookPublisher');
res.send({msg:populatedBooks});
};

// const updateIsHardCoverKey = async function(req,res){

// let updatedBooks = await BookModel.updateMany({ publisher: { $in: ['Penguin', 'HarperCollins'] } }, { isHardCover: true });
// const populatedBooks = await BookModel.find({ _id: { $in: updatedBooks.map(book => book._id) } }).populate('LibraryAuthor').populate('BookPublisher');

// res.send({msg:populatedBooks, book:books.name});
// }

const updateIsHardCoverKey = async function(req, res) {
  try {
    // Update all books with a publisher of "Penguin" or "HarperCollins" to set the "isHardCover" property to true
    const updatedBooks = await BookModel.updateMany({ publisher: { $in: ['Penguin', 'HarperCollins'] } }, { isHardCover: true });
    
    // Retrieve the updated books with author and publisher details
    const populatedBooks = await BookModel.find({ _id: { $in: updatedBooks.map(book => book._id) } })
      .populate({
        path: 'author_id',
        model: 'LibraryAuthor'
      })
      .populate({
        path: 'publisher',
        model: 'BookPublisher'
      });
    
    // Return the updated books as a response
    return res.send({ msg: populatedBooks });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

const updatePriceByAuthorRating = async function(req, res) {
try {
  // Find all books that have an author with rating greater than 3.5
  const books = await BookModel.find().populate(
  { rating: { $gte: 3.5 } }).populate('LibraryAuthor');


  // Update the price of these books
  const updatedBooks = await Promise.all(books.map(async book => {
    if (book.author) {
      // Increase price by 10
      book.price += 10;
      await book.save();
    }
    return book;
  }));

  res.send({ data: updatedBooks });
} catch (error) {
  console.error('Error updating book price:', error);
  res.status(500).send({ error: 'Internal server error' });
}
};

module.exports.updatePriceByAuthorRating=updatePriceByAuthorRating;
module.exports.createBooks = createBooks;
module.exports.getBooksByPriceRange = getBooksByPriceRange;
module.exports.addIsHardCover=addIsHardCover;
module.exports.updatePrice = updatePrice;
module.exports.updateIsHardCoverKey=updateIsHardCoverKey;
module.exports.getBooks=getBooks;



// const getBookByChetan = async function(req, res) {

//     let author = await AuthorModel.findOne({ author_name: 'Chetan Bhagat' }).populate('books');
//     if (author && author.books.length > 0) {
//       res.send({ msg: author.books });
//     } else {
//       res.send({ msg: "No book found by Chetan Bhagat." });
//     }
//   };

// module.exports.getBookByChetan = getBookByChetan;


// const updateBooks =async function(req,res)
// {
//     let pubName= await PublisherModel.find({name:{$in:["Penguin","HarperCollins"]}});
//     let updBook= await BookModel.updateMany({publisher_id:pubName._id},{$set:{isHardCover:true}},{new:true});
//     //  For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
//     let authName = await AuthorModel.find({rating :{$gt:"3.5"}}).select({_id:1})
//     let updPrice= await BookModel.updateMany({author:authName},{$inc:{price:10}},{new:true});//inc for increase
//     res.send(updPrice);
// }

module.exports.updateBooks =updateBooks;