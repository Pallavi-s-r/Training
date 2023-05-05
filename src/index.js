const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { loggingMiddleware } = require('./middleWares/middleWare.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(loggingMiddleware); // add the middleware

app.get('/createUser', (req, res) => {
 res.send("Its working in right direction")
});

mongoose.connect("mongodb+srv://pallavisinghsgrl9:qdFrRJpIqI3Ukw1l@cluster1.v7suuf1.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
