const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
   balance:{
    type: String,
default : "100"},
   age : Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
  address : String,
  isFreeAppUser :{
    type:Boolean,
    default:false
  }
    
}, { timestamps: true });


module.exports = mongoose.model('ProductUser', userSchema) 

