//importing all the dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

console.log("hello, this is first server"); //testing index.js

//using route from index.js file
app.get('/hello' , function(req,res){
    res.send({msg:"route present in index.js file"});
  
}
)

app.use('/hii', (req,res)=>{
res.send("working of app.use");
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});