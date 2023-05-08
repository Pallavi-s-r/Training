const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NovelAuthor",
        required:true
    }, 
    price: Number,
    rating: Number,
    publisher:{
        type: ObjectId,
        ref : "NovelPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }

}, { timestamps: true });

module.exports = mongoose.model('NovelBook', bookSchema)
