const http =  require("http");
const url =  require("url");
const fs =  require("fs");

const myServer =  http.createServer((req, res) => {

    const log =  `${Date.now()} : ${req.url} : New Request Recived from Server\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);

    fs.appendFileSync('./log.text', log ,(err,data) => {

        switch(myUrl.pathname)
        {
            case '/' : res.end("Home Page")
            break;

            case '/about' : 
             const username =  myUrl.query.myname;
             console.log(username);
             res.end(`hii ${username}`)
             break;

            case "/search":
                const search = myUrl.query.search_query;
                console.log(search)
                res.end("Here are your result for "+ search);
                break;

            default:
                res.end("404 Not Found")
        }

    })
})


const PORT = 8000;
myServer.listen(PORT , () => {
    console.log(`Server Running on Port ${PORT}`);
})