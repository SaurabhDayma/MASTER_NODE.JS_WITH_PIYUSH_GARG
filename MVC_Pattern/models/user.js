const mongoose = require('mongoose');


const Userschme =  new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String
    },
    job_title : {
        type : String
    }
})

const User  = mongoose.model("users" , Userschme);

module.exports =  User;