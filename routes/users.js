const express = require('express');
const router = express.Router();



router.get("",function (req,res) {
    res.send("hello users from users.js");
})
router.get("/register",function (req,res) {
    res.send("user registration");
})
module.exports = router;