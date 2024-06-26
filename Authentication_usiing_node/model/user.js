const mongooes = require("mongoose");

const UserSchema =  new mongooes.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
})

const User =  mongooes.model("userlogin" , UserSchema);

module.exports = User;