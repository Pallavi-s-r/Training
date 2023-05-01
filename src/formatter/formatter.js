// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

function trimmed(word){
    console.log(word.trim());
}
function lower(word){
    console.log(word.toLowerCase());
}
function upper(word){
    console.log(word.toUpperCase());
}

module.exports.trimmed = trimmed;
module.exports.lower = lower;
module.exports.upper = upper;