const express = require("express");
const fs =  require("fs");

const { default: mongoose } = require("mongoose");
const { type } = require("os");

const app =  express();

//Conncetion for your database

mongoose.connect("mongodb://localhost:27017/Backend_Piyush_garg")
.then(() => console.log("Mongodb Connected Succesfully"))
.catch((err) => console.log("Failed To Connct with Mongodb", err));

// schema (Structutr)

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


app.use(express.urlencoded({express : false}));

app.use((req, res, next) => {
    fs.appendFile("./log.txt" , `${Date.now()} : ${req.method} : ${req.path}` , (err,data) => {
        next();
    });
})

app.get('/api/users', async(req,res)=>{
       
     const alldata =  await User.find({});

    const html = `
       <ul>
         ${alldata.map((user) => `<li>${user.first_name} - ${user.email}</li>`)}
       </ul>
        `
        res.send(html);
})

app.get('/users' , async (req,res) => {

    const alldata =  await User.find({});

    res.setHeader("x-Myheader", "Saurabh_Dayma");
    return res.json(alldata);
}) 

app.get("/api/users/:id" ,(req,res)=>{

    const id =  Number(req.params.id);

    const user =  users.find((user) => user.id === id);

    if(!user) return res.status(404).json({err : "User Not Found"});

    return res.json(user);

}) 


app.post('/api/users',  async (req,res) => {
     const body =  req.body;
       if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
        {
            res.status(400).json({msg : "All Filled Are Require"});
        }

    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email,
        gender : body.gender,
        job_title : body.job_title
    });


    return res.status(201).json({msg : "Success"});
})


const PORT = 8000;

app.listen(PORT, () =>{
    console.log(`Server Started at Port ${PORT}`);
})