/*  GET -> When you want to get some data from the server.

    POST -> When you want to send and mutate some data in server.

    PUT  
    PATCH
    DELETE

*/



const http =  require("http");
const fs =  require("fs");
const url =  require("url");


const myServer = http.createServer((req,res) => {
        
    const log =  `${Date.now()} : ${req.url} : New Request is Recived from server`;
    const myUrl =  url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile('./log.txt', log, (err, data) => {

         switch(myUrl.pathname){

            case '/' :
                if(req.method == 'GET') res.end("Home page");
            break;   
            
            case '/about' :
                const username =  myUrl.query.myname;
                res.end(`Hellow ${username}`);
            break;    

            case '/search':
                const serch =  myUrl.query.serch_query;
                res.end("Here are your Search for"+ serch);
            break;
            
            case '/signup':
                
                   if(req.method == 'GET') res.end("This is Signup fORM");
                   else if(req.method == 'POST') res.end("Success");
            break;       

            default:
                res.end("Page Not Found");

         }
    })
    
});

const PORT = 8000;
myServer.listen(PORT,()=> {
    console.log("Server Running Succesfully");
})
