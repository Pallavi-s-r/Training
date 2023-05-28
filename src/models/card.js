const mongoose = require('mongoose');

const Card = new mongoose.Schema({
    cradNumber : String,
    cardType:
        {
            type:String,
            enum:["REGULAR","SPECIAL"]
        },
     status:{
            type:String,
            enum:["ACTIVE","INACTIVE"],
            default:"ACTIVE"
        },
    customerName:String,
    vision:String,
    customerID:{
        type:String,
        ref:'Customer'
    }
})

module.exports = mongoose.model('Card',Card);