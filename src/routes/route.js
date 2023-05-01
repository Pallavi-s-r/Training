const express = require('express');
const router = express.Router();
const logger = require('../logger/logger');
const formatter = require('../formatter/formatter');
const util = require('../util/helper');
const _ = require("lodash");

router.get("/test-me", function (req, res) {

    const months = ["jan","feb","mar","apr","may","june","jul",
    'aug',"sep","oct","nov","dec"];
     const subMonths = _.chunk(months,3);
     console.log(subMonths);

     let odds = [1,3,5,7,9];
     let lasts = _.tail(odds);
     console.log(lasts);

     const keyValuePairArray = [
        ["horror", "The Shining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth"],
      ];
      const object = _.fromPairs(keyValuePairArray);
      console.log(object);

    res.send("My first ever api!");

})
 router.get('/logger', function (req,res){
 logger.welcome("Pallavi")
  res.send("working")
 })

 router.get('/formatter', function (req,res){
 formatter.trimmed("functionUp");
 formatter.lower("functionUp");
 formatter.upper("functionUp");

util.printDate();
util.printMonth();
util.getBatchInfo();
  res.send("working")
 })



const movies = [
  { title: 'IronMan'},
  { title: 'SpiderMan Homecoming'},
  { title: 'Lucy - the spy' },
];


router.get('/movies' , function(req,res){
    res.send(movies);
})

router.get('/movies/:indexNumber', function(req,res){
    let indexNumber = req.params.indexNumber;
    let movie = movies[indexNumber]
    if(indexNumber<0 || indexNumber>movies.length){
    res.send("not valid");}
    else{
        res.send(movie);
    }
})



const films =
[ {
  id : 1,
  name : " The Shining "
 }, {
  id : 2,
  name: "Incendies"
 }, {
  id : 3,
  name : "Rang de Basanti"
 }, {
  id : 4,
  name : "Finding Nemo"
 }];
 

//  router.get('/films', function(req, res){
//   res.send(films);
//  });

 router.get('/films/:filmId', function(req,res){
  const filmId = parseInt(req.params.filmId);
  const film = films.find(film=>film.id === filmId);

  
  if(filmId < 0 || filmId >= films.length){
  res.send("eneter valid index number");
 }
 else{
  res.send(film)

 }
  
 })

 const players =  [
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
  
router.post('/players',  function(req,res){
    const {name,dob,gender,city,sports} = req.body;
    if(players.some(player=>player.name === name))
    res.send("Already exist");
    const newPlayer = {name,dob,gender,city,sports}
    players.push(newPlayer);
    res.send({data:players});
})


let persons = [
    {
      name: "PK",
      age: 10,
      votingStatus: false
    },
    {
      name: "SK",
      age: 20,
      votingStatus: false
    },
    {
      name: "AA",
      age: 70,
      votingStatus: false
    },
    {
      name: "SC",
      age: 5,
      votingStatus: false
    },
    {
      name: "HO",
      age: 40,
      votingStatus: false
    }
  ];
  router.post('/person', function(req, res) {
    const votingAge = parseInt(req.query.votingAge); //  votingAge from query parameter
    persons.forEach(person => {
      if (person.age >= votingAge) {
        person.votingStatus = true; // Updating votingStatus -> votingAge
      } else {
        person.votingStatus = false;
      }
    });
    const eligiblePersons = persons.filter(person => person.votingStatus); //  who can vote
    res.send(eligiblePersons);
  })    


  router.get("/sol1.1", function (req, res) {
    let arr2 = [1, 2, 3, 5, 6, 7];
    let n = arr2.length;
    let sumOfArray = arr2.reduce((acc, curr) => acc + curr, 0);
    let sum = ((n + 1)*(n+2))/ 2;  //calculating for n+1 instead of sum til n
    let missingNumber =  sum  - sumOfArray;
    res.send({ data: missingNumber });
  });

  router.get("/sol2", function(req,res){
    let arr = [33,34,35,37,38];
    let n = arr.length +1;
    let first = arr[0];
    let last = arr[arr.length -1];
    let sumOfArray = arr.reduce((acc, curr) => acc +curr , 0);
    let sum = (n *(first + last)) /2;
  
    let missingNumber = sum - sumOfArray;
    res.send({data:missingNumber})
  });

  router.get('/users/:userId', (req, res) => {
    // Access path parameter
    const userId = req.params.userId;
    res.send(`User with ID ${userId}`);
  });
  
  // Route with query parameter
  router.get('/search', (req, res) => {
    // Access query parameter
    const query = req.query.q;
    res.send(`Search query: ${query}`);
  });
  
module.exports = router; 

