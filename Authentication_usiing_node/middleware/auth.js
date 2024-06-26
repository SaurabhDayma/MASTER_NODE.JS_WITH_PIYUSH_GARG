const { getuser } = require("../servies/user");

async function LogginUserOnly(req,res,next) 
{
    const userid =  req.cookies?.uid;

    if(!userid) return res.render("login");

    const user =  getuser(userid);

    if(!user) return res.render("login");

    req.user =  user;
    next();
 
}

module.exports = {
    LogginUserOnly,
}