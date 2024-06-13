
//  Use fs Module when delaing with files in node.js

console.log("We are in 2nd Episod of Node.js");

const fs = require('fs')

// creating a file (Synchronous call)

fs.writeFileSync('./text.txt' , "Namaste Node.js");

//  creating a file ASynchronous call

fs.writeFile('./text.txt' , "Namate Node.js", () =>{});


// Reading the file
// Synchronous call
const res = fs.readFileSync('./contact.txt', "utf-8");
console.log(res);


// ASynchronous call

fs.readFile("./contact.txt" , "utf-8" ,(err, res) => {
      if(err)
        {
            console.log("err in files");
        }
        else
        {
            console.log(res);
        }
});

//  COPY FILES

fs.copyFileSync("./text.txt" , "./contact.txt");

fs.copyFile("./text.txt" , "./contact.txt");





