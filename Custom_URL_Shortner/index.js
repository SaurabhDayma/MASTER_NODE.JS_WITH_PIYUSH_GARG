const express =  require("express");

const URL = require("./model/user")

const router =  require("./routes/user");

const {Connecttodatabase} =  require("./connect");

const app =  express();

Connecttodatabase("mongodb://localhost:27017/ShorterUrl")
.then(() => console.log("Data Base is Succesfully Connected"))
.catch((err) => console.log("Plz Connect to your database" + err));

app.use(express.json());

app.use('/url',router);

app.get('/:shortid' , async (req,res) => {
       const shortId =  req.params.shortid;
      const entry =  await URL.findOneAndUpdate({
          shortId
       }, {$push : {
           visitHistory : {
               timestamp  : Date.now()
           },
       }})
    res.redirect(entry.redirecturl);
})  


const PORT = 8000;

app.listen(PORT , () =>{
    console.log(`Server Started at PORT ${PORT}`);
})