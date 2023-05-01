/** 
 * Problem 2
Module 2 : src/util/helper.js

- printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
    
    Call all these functions in route.js inside the test-me route handler

 */
  const months = ["jan","feb","mar","apr","may","june","jul",
'aug',"sep","oct","nov","dec"]
    let date = new Date();
    function printDate(){
    const options = {month:"long", year:"numeric", date:"numeric"}

    console.log(new Intl.DateTimeFormat('en-US', options).format(date));
console.log(date);
    }
    function printMonth(){
        const month = months[date.getMonth()] 
console.log(month)
    }
    function getBatchInfo(batch,week,day){
   console.log(`${batch} , W${week}, D${day} The topic taught today is NodeJs`)
    }


    module.exports.printDate =printDate;
    module.exports.printMonth =printMonth;
    module.exports.getBatchInfo = getBatchInfo;
