const express = require("express");
// import express from 'express';
const router = express.Router();
const UserController =  require('../Controller/controller.js');
const Middleware = require('../middleware/middleware.js')
// router.get('/getRequest', (req,res)=>{
//     res.send("get data");
//     console.log("get working");
// })
// router.post('/postRequest', (req,res)=>{
//     let data = req.body;
//     res.send({msg:data}); //multiple send res doesn't work only the first send res is delivered by server
//     //res.send("post data");
//     console.log("post working");
// })

// //path params:
// router.get('/getRequest/:userId', (req,res,)=>{
//     let a = "india";
//     let b = "USa";
//     let countries = [a,b] ;
//  let userId = req.params;
//    let data = "Pallavi"
//     res.send({msg : `${data} "and" ${userId}`});
//     console.log("get working",countries);

// })
// router.post('/getParams/:userId', (req,res,next)=>{
//    let userId = req.body.userId;
//    let data = "Pallavi"
//     res.send({msg : `${data} "and" ${userId}`});
//     console.log("get working");

// })

// //query params;
// router.post('/getRequest', (req,res,)=>{
//     let age = req.body.age;
//    if(age>18){
//     res.send({msg:"valid voter"});
//    }
//    else{
//     res.send("invalid voter");
//    }
//     console.log("query working");
    
// })
// router.get('/getQuery', (req,res,next)=>{
//     let age1 = req.query.age1;
//    if(age1>=18){
//     res.send({msg:"valid voter"});
//    }
//    else{
//     res.send("invalid voter");
//    }
//     console.log("query working");
//     next();
// })

//   //creating players -

//   let players =
//    [
//        {
//            "name": "manish",
//            "dob": "1/1/1995",
//            "gender": "male",
//            "city": "jalandhar",
//            "sports": [
//                "swimming"
//            ]
//        },
//        {
//            "name": "gopal",
//            "dob": "1/09/1995",
//            "gender": "male",
//            "city": "delhi",
//            "sports": [
//                "soccer"
//            ]
//        },
//        {
//            "name": "lokesh",
//            "dob": "1/1/1990",
//            "gender": "male",
//            "city": "mumbai",
//            "sports": [
//                "soccer"
//            ]
//        },
//    ]

//    router.get('/getPlayers' , (req,res)=>{
//     res.send({msg:players})
//    })
// router.post('/createPlayers' ,( req,res)=>{ 
//    const {name, dob, gender, city, sports} = req.body;

//    if(players.some(player => player.name === name)){
//      res.send({message : 'Player name already exist'})
//    }
//  else{
//    const newPlayer = {
//      name, dob, city, gender, sports
//    };
 
//    players.push(newPlayer);
//    res.send({message:'Player added' ,  data:players, status : true})
// }



 router.post('/createUser' , UserController.createUser);
 router.get('/userData', UserController.getData);
 router.get('/getByName', UserController.getByName);
router.patch('/updateAge', Middleware.authenticateUser ,UserController.updateAge);
router.patch('/updateStatus',UserController.updateStatus)
router.put('/updateStatus2',UserController.updateStatus2);
router.delete('/users/:name', UserController.deleteUserByName);
module.exports = router;