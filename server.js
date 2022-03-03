const express = require("express");
const { type } = require("express/lib/response");
const mongoose  = require("mongoose");

//import routes
const usersRoutes = require('./routes/users');

require('dotenv').config();

//global variables
const PORT = process.env.PORT;
const CONNECTIONURL = process.env.CONNECTIONURL;

const app = express();

//midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//use routes
app.use('/users', usersRoutes);


//main 
app.get('/', function(req, res){
    res.status(200).send("HOME")
})

app.listen(PORT, function(){
    console.log(`server running on port localhost:${PORT}`);
    //connecting to the db
    db = mongoose.connect(CONNECTIONURL, {useUnifiedTopology: true, useNewUrlParser: true});
    mongoose.connection.once('open', function(){
        console.log("connection established with mongodb");
    }).on('error', function(error){
        console.log('error: ' , error);
    })
});