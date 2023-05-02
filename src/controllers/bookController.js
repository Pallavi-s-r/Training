const BookModel = require("../models/bookModel.js");
const AuthorModel = require("../models/authorModel.js");


const createBooks = async function(req,res){
   
        let books = req.body;
        let bookCreated = await BookModel.create(books);
 res.send({data: bookCreated})
    
}

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

module.exports.getBooksByPriceRange = getBooksByPriceRange;

module.exports.updatePrice = updatePrice;

// const getBookByChetan = async function(req, res) {
//     let author = await AuthorModel.findOne({ author_name: 'Chetan Bhagat' }).populate('books');
//     res.send({ msg: author.books });
//   };
module.exports.createBooks = createBooks;
// module.exports.getBookByChetan = getBookByChetan;