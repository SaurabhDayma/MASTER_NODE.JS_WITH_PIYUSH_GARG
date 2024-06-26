const express =  require("express");
const path = require("path");
const cookieParser =  require("cookie-parser");

const {LogginUserOnly} =  require("./middleware/auth");

const { Connecttodatabase } = require("./connect");

const app =  express();

const userrouter =  require("./router/user");
const staticroute =  require("./router/Staticroute");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


Connecttodatabase("mongodb://localhost:27017/Authentication")
.then(() => console.log("Data Based connected Suucsfully"))
.catch((err) => console.log("Failed to connected to Database" + err));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser);

app.use('/user' , userrouter);
app.use('/' , staticroute);


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server Started At port ${PORT}`);
})