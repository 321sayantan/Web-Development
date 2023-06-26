const http = require("http");
const fs = require("fs");
const filecontent = fs.readFileSync("grid4.html", "utf-8");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(filecontent);
})


server.listen(8000, '127.0.0.1', () => {   //normal is 80.... and there is no need to write      
    console.log("the port number is 8000");  //but is any other port number we have to write it after the local server ip adderss
})