
const shortid =  require("shortid"); 

const URL = require("../model/user");

async function handelShortUrl(req, res)
{
    const body =  req.body;

    if(!body.url) return res.status(400).json({ err : "Url is required"});

      const shortId =  shortid(8);
      
      await URL.create({
         shortId : shortId,
         redirecturl : body.url,
         visitHistory : [],
      });

      return res.render('home',{id : shortId});

}

module.exports = {
    handelShortUrl,
}