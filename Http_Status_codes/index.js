/*  HTTP status codes are used to indicate the status of a request.
02:10 HTTP status codes starting with 4 indicate client errors, while those starting with 500 indicate server errors.
04:13 HTTP Status Codes explained
06:06 Understanding HTTP status codes
07:58 Creating a new user requires specific fields
09:47 HTTP status codes indicate different types of errors and authorization issues.
11:42 HTTP status codes provide information about server and client errors.
14:00 HTTP Status Codes 503
Crafted by Merlin AI.
*/


const express = require("express");
const fs = require("fs");

const users = require("./MOCK_DATA.json");

const app =  express();

app.use(express.urlencoded({express : false}));

app.use((req, res, next) => {
    fs.appendFile("./log.txt" , `${Date.now()} : ${req.method} : ${req.path}` , (err,data) => {
        next();
    });
})

app.get('/api/users', (req,res)=>{
    const html = `
       <ul>
         ${users.map((user) => `<li>${user.first_name}</li>`)}
       </ul>
        `
        res.send(html);
})

app.get('/users' , (req,res) => {
    res.setHeader("x-Myheader", "Saurabh_Dayma");
    return res.json(users);
}) 

app.get("/api/users/:id" ,(req,res)=>{

    const id =  Number(req.params.id);

    const user =  users.find((user) => user.id === id);

    if(!user) return res.status(404).json({err : "User Not Found"});

    return res.json(user);

}) 


app.post('/api/users', (req,res) => {
     const body =  req.body;
     if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
        {
            res.status(400).json({msg : "All Filled Are Require"});
        }
     users.push({id : users.length +1 , ...body});
     fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err,data) =>{
        return res.status(201).json({status : "Sucesss", id: users.length}) 
     })

})



const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server Started at port ${PORT}`);
})