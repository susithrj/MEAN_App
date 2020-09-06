const express = require('express');
const router = express.Router();
const  User = require('../models/user')

router.post("/register",function (req,res) {

   const  newUser = new User({
username:req.body.username,
       name:req.body.name,
       email:req.body.email,
    password:req.body.password
   })

})

router.get("",function (req,res) {
    res.send("hello users from users.js");
})

module.exports = router;