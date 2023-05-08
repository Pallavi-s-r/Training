const bookModel = require("../models/bookModel");
const { get } = require("../routes/route");

const createBooks = async function(req,res){
    let data = req.body;
    const bookCreated = await bookModel.create(data);
    res.send({msg:bookCreated});
}

const bookData = async function(req,res){
    const dataSaved = await bookModel.find();
    res.send({msg:dataSaved});
}

const bookNameWithAuthorName = async function(req,res){
const bookWithAuthor = await bookModel.find({},{bookName:1,authorName:1})
res.send({bookWithAuthor})
}

const updateTag = async function(req,res){
    const data = await bookModel.updateOne({$set : {tags :["a","b"]}},{new:true});
    res.send({msg:data});
}

//getBooksInYear: takes year as input in post request and gives list of all books published that year
 
const booksByYear = async function(req, res){
    let year = req.body.year;
  let books = await bookModel.find({year:year},{bookName:1,authorName:1})
  res.send({msg : books})
}

//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const addPriceField = async function(req,res){
   const newField =  await bookModel.updateMany({}, { $set: { price: {INR : "200INR" , EUR : "2.5EUR"} } },{upsert:true});
   res.send({msg:newField});
}

const getINRBooks = async function(req,res){
    const INRbooks = await bookModel.find({INR : {$in:["200"]}},{bookName:1, authorName:1});
    res.send({msg:INRbooks});
}


//getRandomBooks - returns books that are available in stock or have more than 500 pages-
// const addPriceField = async function(req,res){
//     const newField =  await bookModel.updateMany({}, { $set: { price: {INR : "200INR" , EUR : "2.5EUR"} } },{upsert:true});
//     res.send({msg:newField});
//  }

const getStocks = async function(req,res){
    const available = await bookModel.find({stockAvailable : true},{bookName:1, authorName:1});
    res.send({msg:available});
}

module.exports.getStocks = getStocks;
module.exports.getINRBooks = getINRBooks

module.exports.addPriceField =addPriceField
module.exports.booksByYear = booksByYear;
module.exports.bookNameWithAuthorName = bookNameWithAuthorName
module.exports.createBooks = createBooks;
module.exports.bookData = bookData;
module.exports