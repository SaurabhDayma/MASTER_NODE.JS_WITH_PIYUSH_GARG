const mongoose = require("mongoose");

async function ConnectMongobd(url)
{
    return mongoose.connect(url);
}

module.exports = {
    ConnectMongobd,
}