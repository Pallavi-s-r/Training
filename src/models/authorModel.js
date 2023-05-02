const mongoose = require('mongoose');

const authorScehma = new mongoose.Schema( {
    author_id : {
        type:Number,
    required : true} ,
    author_name: String, 
     age : Number,
    address :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('Author', authorScehma);
