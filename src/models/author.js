const mongoose=require('mongoose');

const authorModel=new mongoose.Schema({
    fname:{
        type: String,
        required:true,
        trim: true,
        minLength:[2,"First name should be at least 2 characters long"],
        validate:[/^[A-Za-z][a-z]{1,50}$/,"First name should contains only letters and first letter only capital e.g- Swarnendu"]
        }, 
    lname :{
        type: String,
        required:true,
        trim: true,
        minLength:[2,"Last name should be at least 2 characters long"],
        validate:[/[A-Za-z][a-z]{1,50}$/,"Last name should contains only letters and first letter only capital e.g- Dey"]
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