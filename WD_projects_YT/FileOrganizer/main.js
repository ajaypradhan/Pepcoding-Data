let inputArr = process.argv.slice(2);  //take input from command line
console.log(inputArr);
//node main.js tree "directory path"
//node main.js organize "directory path"
//node main.js help

let command = inputArr[0];
switch (command) { 
    case "tree":
        break;
    case "organize":
        break;
    case "help":
        break;
    default:
        console.log("Please write correct command");
        break;
}

function treeFn(dirPath) {
    console.log("Tree command implemented for ", dirPath);
}
function organizeFn(dirPath) {
    console.log("Organize command implemented for ", dirPath);
}
function helpFn(dirPath) {
    console.log("help command implemented for ", dirPath);
}