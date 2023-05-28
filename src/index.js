const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');

const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://pallavisinghsgrl9:qdFrRJpIqI3Ukw1l@cluster1.v7suuf1.mongodb.net/test', {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
