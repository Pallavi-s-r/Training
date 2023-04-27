const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
bookName :{
type:String,
 required :true,
 unique:true
},
authorName : String,

category : [String],
year : {
    type : Number,
    default : "0/0/0000"
}
})
const BookModel = mongoose.model('Book', bookSchema);
module.exports = BookModel;
//module.export = mongoose.model('Books', bookSchema);








//Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 
