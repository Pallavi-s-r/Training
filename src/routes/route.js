const express = require("express");
const router = express.Router();


/** 
ASSIGNMENT:
you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
take input in query param as votingAge..and for all the people above that age, change votingStatus as true
also return an array consisting of only the person that can vote

WRITE A POST API TO THE ABOVE
take this as sample for array of persons:*/


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
  

  //or 

  router.post('/person', (req, res) => {
    const votingAge = parseInt(req.query.votingAge);
    const eligiblePersons = persons.filter(person => person.age >= votingAge);
    eligiblePersons.forEach(person => person.votingStatus = true);
    res.send(eligiblePersons);
  });
});

module.exports = router;
