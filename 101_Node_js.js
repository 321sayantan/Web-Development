// console.log("hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Transform</title>
      <style>
          *{
              margin: 0px;
              padding: 0px;
          }
          .container{
              display: flex;
              background-color: aquamarine;
              justify-content: center;
              align-items: center;
              height: 80vh;
          }
          .box{
              background-color: brown;
              border: 2px solid black;
              border-radius: 8px;
              height: 400px;
              width: 400px;
              justify-content: center;
              align-items: center;
              display: flex;
              transition: all 0.5s ease-in-out;
          }
          .box:hover{
              /* transform: rotate(360deg); */
              /* transform: skew(40deg); */
              /* transform: scale(2); */
              /* transform: translateX(123px); */
              /* transform: translateY(123px); */
              transform: translate(123px,123px);
  
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="box">
              This is a box
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// _ refers to the previous variable

