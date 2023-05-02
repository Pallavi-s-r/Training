const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String, 
    author_id: {
        type:Number, 
        required :true},
    price:{
        type:Number,
        required:true
    },
     ratings : Number
    },
     {timestamps:true}
);
module.exports = mongoose.model('NewBook', bookSchema) //users