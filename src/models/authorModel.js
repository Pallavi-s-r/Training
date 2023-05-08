const mongoose =  require('mongoose');

const authorSchema = new mongoose.Schema({
    author_id : {
        type : String,
    required:true,
    unique:true
},
    author_name : String,
    age:Number,
    address:String
} ,{timestamps:true},{bufferTimeoutMs : 30000});

module.exports = mongoose.model('Authors',authorSchema)
