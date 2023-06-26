const fs = require('fs');
const http= require('http');

const host= '127.0.0.1';
const port= 3000;

const home= fs.readFileSync("home.html", "utf-8");
const about= fs.readFileSync("about.html", "utf-8");
const services= fs.readFileSync("services.html", "utf-8");
const contact= fs.readFileSync("contact.html", "utf-8");
// console.log(home);

const server= http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;

    res.statusCode=200;
    res.setHeader('Content-type','text/html');

    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.end(`<h1>404 NOT FOUND</h1>`);
    }
});

server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}/`);
});