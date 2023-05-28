const mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    firstName : String,
    lastName:String,
    mobileNumber:String,
    DOB:Date,
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    address:String,
    customerId : UUID,
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"]
    }
})  

module.exports = mongoose.model('Customer',Customer);