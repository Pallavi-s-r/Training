const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:String,
  age:Number,
  mobile:String,
  gender:{
    type: String
  },
  address: String,
  maritialStatus: {
    type: Boolean}
});

module.exports = mongoose.model('PracticeUser', userSchema); 