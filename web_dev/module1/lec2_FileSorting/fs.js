// fs module demo 
// fs => file system

const fs = require("fs");

// utf-8 => format for plain text

// fs.writeFileSync("./try.txt","try file");

let tryData = fs.readFileSync("./try.txt");
console.log(tryData + "");



