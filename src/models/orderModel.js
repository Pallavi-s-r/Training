const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderSchema = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        ref: "User",
        required:true
    }, 
	productId: {
        type: ObjectId,
        required:true,
        ref :'Product'},

	amount: Number,
	isFreeAppUser: Boolean, 
	date: Date

}, { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema) 
