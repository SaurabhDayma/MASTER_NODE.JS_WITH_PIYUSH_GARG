/* REST (Representational State Transfer) API is a architectural style for building web services that provides a standardized way for 
clients to interact with server-side resources. 
It is a popular approach for building web-based APIs due to its simplicity, scalability, and widespread adoption. */

const express =  require("express");
const users = require("./MOCK_DATA.json");
const app =  express();


// ROUTS
app.get('/users', (req,res)=>{
    const html =  `
      <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
      </ul>
    `
    res.send(html);
}) 

// REST API
app.get('/api/users', (req, res) =>{
      res.json(users);
})

//Dynamic Path 
app.get("/api/users/:id", (req,res)=>{
      const id = Number(req.params.id);
      const user = users.find((userid) => userid.id === id);
      return res.json(user);
})

//POST METHOD
app.post("/api/users", (req,res)=>{
     return res.json({status : "Pendeing"});
});

app.patch("/api/users/:id",(req,res)=>{
    return res.json({status : "Pending"});
})

app.delete("/api/users/:id",(req,res)=>{
    return res.json({status : "Pending"});
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server Started At PORT ${PORT}`);
})