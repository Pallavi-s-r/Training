const CustomerModel = require('../models/customer');
const cardModel = require('../models/card');

const createCustomer = async function(req,res){
    data = req.body;
    const customer = await CutomerModel.create(data);
    res.send({status:true},{msg:data})
}
const getCustomer = async function(req,res){
    const data = await CustomerModel.find({status:"ACTIVE"});
    res.send({status:true,msg:data});
}
const delCustomer  = async function(req,res){
  const del = await CustomerModel.deleteOne({emailId:1});
  res.send({status:true,msg:del});
}

const createCard = async function(req,res){
    data = req.body;
    const card = await cardModel.create(data);
    res.send({status:true},{msg:data})
}

const getCard = async function(req,res){
    const data = await CardModel.find();
    res.send({status:true,msg:data});
}

module.exports={createCustomer,getCustomer,delCustomer,createCard,getCard};