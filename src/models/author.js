const mongoose=require('mongoose');

const authorModel=new mongoose.Schema({
    fname:{
        type: String,
        required:true,
        trim: true,
        minLength:[2,"First name should be at least 2 characters long"],
        validate:[/^[A-Za-z][a-z]/,"First name should contains only letters "]
        }, 
    lname :{
        type:String,
        required:true,
        trim: true,
        minLength:[2,"Last name should be at least 2 characters long"],
        validate:[/^[A-Za-z][a-z]/,"Last name should contains only letters"]
        
    },
    title:{
        type : String,
        enum : ["Mr", "Mrs", "Miss"],
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model('authorData',authorModel);