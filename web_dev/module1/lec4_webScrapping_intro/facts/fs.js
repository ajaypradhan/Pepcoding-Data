const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData  = fs.readFileSync("./index.html","utf8");

//html file is loaded in cheerio 
let myDocumnet = cheerio.load(htmlKaData);

//in js for gettting file information is by
//document.querySelector("h1")

//for cheerio 
let h1KaData = myDocumnet("h1").text();

// console.log(h1Element); element => cheerio => object form me data
console.log(h1KaData);