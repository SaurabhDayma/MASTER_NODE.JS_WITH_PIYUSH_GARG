const mongooes =  require("mongoose")

async function Connecttodatabase(url)
{ 
     return mongooes.connect(url);
}

module.exports = {
    Connecttodatabase,
}