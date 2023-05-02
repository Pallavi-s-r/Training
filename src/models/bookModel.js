const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ratings: {
    type: Number,
    required: true
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
