const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post("/register", function (req, res) {

    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    User.saveUser(newUser, function (err, user) {
        if (err) {
            res.json({state: false, msg: "data not inserted"});
        }
        if (user) {
            res.json({state: true, msg: "data inserted"})
        }
    })

})

router.post("/login", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findByEmail(email,function (err, user) {
        if(err) throw err;

        if(!user){
            res.json({state:false,msg:"user not found"})
        }

        User.passwordCheck(password,user.password,function (err,match) {
            if (err) throw err;

            if(match){
                console.log("email,pass,combination worked");
            }
        })

    })
})

module.exports = router;