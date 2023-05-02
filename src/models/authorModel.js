const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  author_id: {
    type: String,
    required: true,
   
  },
  author_name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
