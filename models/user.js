const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;


const userSchema = new schema({
    username: {type: String,required:true},
    name: {type: String,required:true},
    email: {type: String,required:true},
    password: {type: String,required:true}

});

module.exports = mongoose.model("User",userSchema);

module.exports.saveUser= function (newUser,callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("B4c0/\/", salt, function(err, hash) {
            console.log(hash);
            newUser.password = hash;

            if(err) throw err;
            newUser.save(callback);
        });
    });

};
