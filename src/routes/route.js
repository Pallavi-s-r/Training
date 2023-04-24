const express = require("express");
const router = express.Router();


/** Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this
 app.get("/sol1", function (req, res) {
	   //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
	   let arr= [1,2,3,5,6,7]
	   let missingNumber
 
	   ///LOGIC WILL GO HERE 
	   res.send(  { data: missingNumber  }  );
 });
 */


router.get("/sol1", function (req, res) {
  let arr = [1,2,3,5,6,7];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      missingNumber = i + 1;
      break;
    }
  }
  res.send({ data: missingNumber });
});

  //or 

router.get("/sol1.1", function (req, res) {
  let arr2 = [1, 2, 3, 5, 6, 7];
  let n = arr2.length;
  let sumOfArray = arr2.reduce((acc, curr) => acc + curr, 0);
  let sum = ((n + 1)*(n+2))/ 2;  //calculating for n+1 instead of sum til n
  let missingNumber =  sum  - sumOfArray;
  res.send({ data: missingNumber });
});



// Q2. 
   // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 // Your route code will look like this
//  app.get("/sol2", function (req, res) {
//   //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//   let arr= [33, 34, 35, 37, 38]
//   let missingNumber

//   ///LOGIC WILL GO HERE 

//   res.send(  { data: missingNumber  }  );
// });

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

//or 

router.get("/sol2.1", function (req, res) {
  let arr = [33, 34, 35, 37, 38];
  let missingNumber;
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] - arr[i] != 1) {
      missingNumber = arr[i] + 1;
      break;
    }
  }
  
  res.send({ data: missingNumber });
});



module.exports = router;
