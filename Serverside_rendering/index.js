const express =  require("express");

const path =  require("path")

const URL = require("./model/user")

const router =  require("./routes/user");
const stacticrouter =  require('./routes/Staticroute');

const {Connecttodatabase} =  require("./connect");

const app =  express();

Connecttodatabase("mongodb://localhost:27017/serversiderendering")
.then(() => console.log("Data Base is Succesfully Connected"))
.catch((err) => console.log("Plz Connect to your database" + err));


app.set("view engine", "ejs");

app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/url',router);
app.use('/' , stacticrouter);


app.get("/server" , async (req,res) => {
   const allurl =  await URL.find({});
   return res.render("home" ,{
      urls : allurl,
   })
})

app.get('/url/:shortid' , async (req,res) => {
       const shortId =  req.params.shortid;
      const entry =  await URL.findOneAndUpdate(
         {
          shortId,
         }, 
       {$push : {
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