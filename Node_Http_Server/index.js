//  Building Node HTTP Server 

const http =  require("http");
const fs =  require("fs");

const myServer = http.createServer((req,res) => {
    
    const log =  `${Date.now()} : ${req.url} : new request recived\n`;
    fs.appendFileSync("./log.txt" , log , (err, data) => {

        switch(req.url){
            case '/' : res.end("Welcome to Home Page");
            break;

            case '/about' : res.end("Welcome to About Page");
            break;

            default : 
            res.end("404 Error");
        }
        

    });
})

const PORT = 8000;
myServer.listen(8000 , () => {
    console.log(`Server started at Port ${PORT}`)
})