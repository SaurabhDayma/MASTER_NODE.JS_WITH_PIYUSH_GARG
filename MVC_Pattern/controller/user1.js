
const User  =  require("../models/user");

const users =  require("../MOCK_DATA.json");

async function handelroutes(req,res)
{
   const alldata =  await User.find({});
   res.setHeader("x-Myheader", "Saurabh_Dayma");
   return res.json(alldata);
}

async function handelUserById(req,res)
{ 
    const id =  Number(req.params.id);

    const user =  users.find((user) => user.id === id);
 
    if(!user) return res.status(404).json({err : "User Not Found"});

    return res.json(user);
      
}

async function handelPostReq(req,res)
{ 
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

 return res.status(201).json({msg : "Success", id : result.id});
     
}

module.exports = {
     handelroutes,
     handelUserById,
     handelPostReq,
}