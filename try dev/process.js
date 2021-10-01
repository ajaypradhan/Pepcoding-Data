let minimist = require("minimist");
let fs = require("fs");
let jsdom = require("jsdom");

let agrs = minimist(process.argv);

fs.readFile(args.source, function (err, data) {
  console.log(data);
});
