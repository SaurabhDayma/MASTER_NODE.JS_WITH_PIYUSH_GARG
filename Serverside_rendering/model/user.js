const mongoose =  require("mongoose");


const UserSchema = new mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true,
    },
    redirecturl : {
        type : String,
        required : true,
    },
    visitHistory : [{ timestamp : {type : Number} }]
}, {timestamps : true});

const URL =  mongoose.model('serversidedata', UserSchema);

module.exports = URL;