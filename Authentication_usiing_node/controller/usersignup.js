
const {v4 : uuidv4}  = require("uuid");

const {setuser , getuser} =  require("../servies/user");


const User =  require('../model/user');


async function handelUserSignup(req,res)
{
   const {name , email, password} =  req.body;

   await User.create({
     name,
     email,
     password,
   })

   return res.render("home");
}

async function handelUserLogin(req,res)
{
     const {email , password} =  req.body;
     const user  =  await User.findOne({email, password});

     if(!user) return res.render("login", {
        err : "Invalid username or password",
     })

      const sessionID =  uuidv4();
      setuser(sessionID,user);
      res.cookie("uid", sessionID);
     return res.render("home");
}

module.exports = {
    handelUserSignup,
    handelUserLogin,
}