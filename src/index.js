//importing all the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');
const mongoose =  require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

console.log("hello, this is first server"); //testing index.js

//using route from index.js file
app.get('/hello' , function(req,res,next){
    res.send({msg:"route present in index.js file"});
    next();
}
)
//tested for middleware
app.use('/hii', (req,res)=>{
res.send("working of app.use");
})

app.use('/',route);

mongoose.connect("mongodb+srv://pallavisinghsgrl9:qdFrRJpIqI3Ukw1l@cluster1.v7suuf1.mongodb.net/test", {
    useNewUrlParser: true , connectTimeoutMS: 30000
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

