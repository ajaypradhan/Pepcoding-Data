
const fs = require("fs");
const files = ["../f1.txt", "../f2.txt" , "../f3.txt"];
let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function (data) {
  console.log(data + "");
  let f2Promise = fs.promises.readFile("./f2.txt");
  f2KaPromise.then(function (data) {
    console.log(data + "");
    let f3Promise = fs.promises.readFile("./f3.txt");
    f3kaPromise.then(function (data) {
      console.log(data + "");
    });
  });
});
