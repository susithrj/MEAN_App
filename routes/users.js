const express = require('express');
const router = express.Router();

router.post("/register",function (req,res) {
console.log(req.body)
})

router.get("",function (req,res) {
    res.send("hello users from users.js");
})

module.exports = router;