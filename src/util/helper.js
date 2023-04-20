/** 
 * Problem 2
Module 2 : src/util/helper.js

- printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
	Call all these functions in route.js inside the test-me route handler

 */

	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const today = new Date();
	

	 function date(){
		console.log(today); //this will print date into Iso format . To format it as simple - we can do below code
		
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
	    console.log(new Intl.DateTimeFormat('en-US', options).format(today));
	 }
	 function month(){
		const month = months[today.getMonth()];
		console.log(`The peresent month is ${month}`);
	 }
	 function getBatchInfo(batch, week, day, topic){
		console.log(`${batch}, W${week}D${day} the topic for today is ${topic}`);
	 }

	 module.exports.date = date;
	 module.exports.month = month;
	 module.exports.getBatchInfo = getBatchInfo;
