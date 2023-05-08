const NovelBookModel = require('../models/novelModel');
const NovelPublisherModel = require('../models/publisherModel');
const NovelAuthorModel = require('../models/novelAuthor');

const getisHardCover = async function(req,res){
   const addHardCover = await NovelBookModel.updateMany({}, { $set: { isHardCover: false } });

    //  Find the publishers 'Penguin' and 'HarperCollins'
    const publishers = await NovelPublisherModel.find({ publisher_name: { $in: ['Penguin', 'HarperCollins'] } });

    //  Update the isHardCover attribute to true for books published by 'Penguin' and 'HarperCollins'
  const data =   await NovelBookModel.updateMany({ publisher: { $in: publishers } }, { $set: { isHardCover: true } });

  res.send({msg2:addHardCover},{msg:data})
}

const updatePrice =  async function(req,res){
    const authors = await NovelAuthorModel.find({ rating: { $gt: 3.5 } });

    // Step 2: Get the book IDs written by these authors
    const bookIds = await NovelBookModel.find({ author_id: { $in: authors } }).distinct('_id');

    // Step 3: Update the prices of the books by adding 10
 const data =   await NovelBookModel.updateMany({ _id: { $in: bookIds } }, { $inc: { price: 10 } });
 
 res.send({msg:data});
}
module.exports.getisHardCover =getisHardCover;
module.exports.updatePrice =updatePrice;