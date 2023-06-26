// Synchronous or blocking
// -line by line execution

// Asynchronous or non-blocking
// -line by line execution not guaranteed
// -callbacks will fire


const fs = require("fs");
fs.readFile("text1.txt", "utf-8",(err,data)=>{
    console.log(data);     // This will run after reading all the data from the file
});
console.log("this is a message"); // this line is printed first

