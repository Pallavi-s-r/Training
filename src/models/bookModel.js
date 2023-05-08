const mongoose =  require('mongoose');

const bookScehma = new mongoose.Schema(
    {
        bookName : {
            type:String,
        required:true},
        authorName : String,
        category : String,
        year: {
            type:String,
            default:2021
        },
        price:{
            INR : "String",
            EUR : "String"
        },
        tags : [String],
        totalPages : Number,
        
    }, {bufferTimeoutMS : 20000}
);

bookScehma.add({
    stockAvailable : {
        type: Boolean,
        default :true
    }
  });

  module.exports = mongoose.model('BookList',bookScehma);