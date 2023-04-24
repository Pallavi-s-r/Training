const express = require("express");
const router = express.Router();


let players =  [
  {
    "name" :"manish",
    "dob"  : "1/1/1995",
    "gender" : "male",
    "city" :"jalandhar",
    "sports": [
      "swimming"
    ]
  },
  {
    "name" :"gopal",
    "dob"  : "1/09/1995",
    "gender" : "male",
    "city" :"delhi",
    "sports": [
      "soccer"
    ]
  },
  {
    "name" :"lokesh",
    "dob"  : "1/1/1990",
    "gender" : "male",
    "city" :"mumbai",
    "sports": [
      "soccer"
    ]
  },

]

//1 - Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)


router.post('/players', function(req,res){

  const {name, dob, gender, city, sports} = req.body;

  if(players.some(player => player.name === name)){
    res.send({message : 'Player name already exist'})
  }

  const newPlayer = {
    name, dob, city, gender, sports
  };

  players.push(newPlayer);
  res.send({message:'Player added' ,  data:players, status : true})

})

module.exports = router;
