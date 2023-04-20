const express = require('express');
const router = express.Router();

const logger = require('../logger/logger.js')
const util = require('../util/helper.js')
const validator = require('../validator/formatter.js')

const _ = require('lodash');


router.get('/test-me', function (req, res) {
    logger.welcome("Pallavi");

    util.date();
    util.month();
    util.getBatchInfo("Technetium", 3,4 , "NodeJs Module");

    validator.trimmed(" functionUp ");
    validator.changeToLowerCase("functionUp");
    validator.changeToUpperCase("functionUp");

    //1
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const subArrays = _.chunk(months, 3);
console.log(subArrays);

//2
const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const lastNineNumbers = _.tail(oddNumbers);
console.log(lastNineNumbers);

//3
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 4, 6, 7, 8];
const array3 = [7, 8, 8, 10, 11,5];
const array4 = [10, 11, 12, 13, 14];
const array5 = [13, 14, 15, 16, 17];
const mergedArray = _.union(array1, array2, array3, array4, array5);
console.log(mergedArray); 

//4 - 

const keyValuePairArray = [['horror', 'The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy', 'Pans Labyrinth']];
const object = _.fromPairs(keyValuePairArray);
console.log(object); 


    res.send('My first ever api!')
});



module.exports = router;

/**
 * Problem 4
Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays on console.
- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]


NOTE: You can write the login in any route of your choice. You can keep one single route for all of these questions or separate ones for each question.

 */

// Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
// Lodash’s modular methods are great for:

// Iterating arrays, objects, & strings
// Manipulating & testing values
// Creating composite functions