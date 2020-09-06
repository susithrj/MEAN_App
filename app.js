const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

const  config = require('./config/database')
const user = require('./routes/users')

const connection = mongoose.connect(config.database);
if(connection){
    console.log("database connected")
}
app.use(express.static(path.join(__dirname,"public")));
app.use('/users',user);

app.get("/",function (req,res) {
    res.send("hello world");
})


app.listen(3000,function () {
    console.log("listening to port 3000");
})


