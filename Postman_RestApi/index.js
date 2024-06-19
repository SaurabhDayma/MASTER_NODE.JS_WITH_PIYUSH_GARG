const express =  require("express");
const fs =  require("fs");
const users =  require("./MOCK_DATA.json");
const app =  express();


app.get('/users' ,(req,res)=>{
    const html =  `
      <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
      </ul>
    `
    res.send(html);
})

app.get('/api/users', (req,res)=>{
     res.json(users);
})

app.use(express.urlencoded({extended : false}));

app.post('/api/users', (req,res)=>{
    const body =  req.body;
    users.push({id: users.length +1 , ...body});
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) =>{
          return res.json({status : "Sucesss", id: users.length})  
   }) 
    
})


const PORT =  8000;
app.listen(PORT,(err,req)=>{
      console.log(`Server is Running on Port ${PORT}`);
})