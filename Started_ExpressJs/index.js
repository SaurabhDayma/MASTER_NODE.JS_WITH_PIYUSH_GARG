/*  Express.js is a popular web application framework for Node.js. 
    It provides a set of features and tools that make it easier to build web applications and APIs using Node.js.

Some key features and benefits of Express.js include:

Routing: Express.js provides a simple and intuitive routing system that allows you to handle different HTTP methods (GET, POST, PUT, DELETE, etc.) and define routes for your application.

Middleware: Express.js uses a middleware architecture, which means you can easily add functionality to your application by using middleware functions. These functions can modify the request or response objects, perform additional processing, or handle errors.

Template Engines: Express.js supports various template engines, such as Handlebars, Pug (formerly Jade), and EJS, which make it easier to generate dynamic HTML pages.

Static File Serving: Express.js can serve static files, such as images, CSS, and JavaScript files, directly from the file system.

Handling Request and Response: Express.js provides a convenient API for working with the HTTP request and response objects, making it easier to extract data from the request, set headers, and send responses.

Error Handling: Express.js has built-in support for error handling, allowing you to define custom error handlers and handle errors gracefully.

Middleware Ecosystem: The Express.js ecosystem includes a wide range of middleware modules that provide additional functionality, such as authentication, logging, and database integration.
*/

const express = require("express");
const app =  express();

app.get('/',(req,res)=> {
    
   return res.send("Hellow From Home Page");
})

app.get('/about',(req,res)=>{

    return res.send(`Hellow ${req.query.name}`);
})

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`);
})

