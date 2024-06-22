const express = require("express");
const UserRouter =  require("./routes/user");

const { ConnectMongobd } =  require('./connection');

const {logReqRes} =  require("./middleware");

const app =  express();


//Conncetion for your database
ConnectMongobd("mongodb://localhost:27017/Backend_Piyush_garg")
.then(() => console.log("Connection is Suucessful"))
.catch((err) => console.log("databased is not connected plz checkout" + err));


// Middelwares
app.use(express.urlencoded({express : false}));

app.use(logReqRes("./log.txt"));


// Routes
app.use("/api/users" , UserRouter);


const PORT = 8000;
app.listen(PORT, () =>{
    console.log(`Server Started at Port ${PORT}`);
})