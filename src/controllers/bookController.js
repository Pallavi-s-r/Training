const BookModel = require("../models/bookModel.js");
const AuthorModel = require("../models/authorModel.js");


const createBooks = async function(req,res){
        let books = req.body;
        let bookCreated = await BookModel.create(books);
         res.send({data: bookCreated});
    
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
    const books = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 });

    // Get the author names corresponding to the author IDs
    const authorNames = await Promise.all(books.map(async book => {
      const author = await AuthorModel.findById(book.author_id);
      return author.author_name;
    }));

    // Create a response object with the author names
    const result = { author_names: authorNames };

    // Send the response back
    res.send(result);


const books1 = await BookModel.find({price:{$gte :50, $lte:100}}).populate('author');

// Extract the author names from the result
const authorNames1 = books1.map(book => book.author_id.author_name);

// Create a response object with the author names
const response = { author_names: authorNames1 };

// Send the response back
res.send(response);

 
};

// 



// const BookModel = require("../models/bookModel.js");
// const AuthorModel = require("../models/authorModel.js");

// const createBooks = async function(req, res) {
//   try {
//     let books = req.body;
//     let bookCreated = await BookModel.create(books);
//     res.send({ data: bookCreated });
//   } catch (error) {
//     console.error('Error creating books:', error);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// };

const addIsHardCover = async function(req, res) {
  try {
    // Update all books published by 'Penguin' and 'HarperCollins' to add the "isHardCover" property with a value of true
    const updatedBooks = await BookModel.updateMany({ publisher: { $in: ['Penguin', 'HarperCollins'] } }, { $set: { isHardCover: true } });
    console.log('Successfully added the "isHardCover" property to the Book schema.');
    res.send({ msg: updatedBooks });
  } catch (error) {
    console.error('Error updating isHardCover key:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

const updatePriceByAuthorRating = async function(req, res) {
  try {
    // Find all books that have an author with rating greater than 3.5
    const books = await BookModel.find({}).populate('author');

    // Update the price of these books
    const updatedBooks = await Promise.all(books.map(async book => {
      if (book.author && book.author.rating > 3) {
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

module.exports.createBooks = createBooks;
module.exports.addIsHardCover = addIsHardCover;
module.exports.updatePriceByAuthorRating = updatePriceByAuthorRating;


module.exports.updatePriceByAuthorRating=updatePriceByAuthorRating;
module.exports.createBooks = createBooks;
module.exports.getBooksByPriceRange = getBooksByPriceRange;
module.exports.addIsHardCover=addIsHardCover;
module.exports.updatePrice = updatePrice;
// module.exports.updateIsHardCoverKey=updateIsHardCoverKey;
// const getBookByChetan = async function(req, res) {
//     let author = await AuthorModel.findOne({ author_name: 'Chetan Bhagat' }).populate('books');
//     res.send({ msg: author.books });
//   };

// module.exports.getBookByChetan = getBookByChetan;