const fs = require("fs");
let text= fs.readFileSync("text1.txt", "utf-8");
text=text.replace("sayantan", "Babusona");

console.log("the content of the file is::");
console.log(text);

console.log("Creating a new file....");
fs.writeFileSync("text2.txt", text);
