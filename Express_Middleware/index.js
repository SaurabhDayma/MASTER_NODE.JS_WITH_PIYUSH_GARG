// Express Middleware

const express =  require("express");
const fs =  require("fs");

const users =  require("./MOCK_DATA.json");

const app =  express();

//Middleware 
app.use(express.urlencoded({express : false}));

// Middleware 2
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
    return res.json(users);
}) 


app.post('/api/users', (req,res) => {
     const body =  req.body;
     users.push({id : users.length +1 , ...body});
     fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err,data) =>{
        return res.json({status : "Sucesss", id: users.length}) 
     })

})

const PORT = 8000;
app.listen(PORT, () =>{
    console.log(`Server Started at Port ${PORT}`);
})