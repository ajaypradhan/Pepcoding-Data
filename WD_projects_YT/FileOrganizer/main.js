let inputArr = process.argv.slice(2);  //take input from command line
// console.log(inputArr);
//node main.js tree "directory path"
//node main.js organize "directory path"
//node main.js help

let command = inputArr[0];
switch (command) { 
    case "tree":
        treeFn(inputArr[1])
        break;
    case "organize":
        organizeFn(inputArr[1])
        break;
    case "help":
        helpFn();
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
function helpFn() {
    console.log(`
    List of All the commands:
                    node main.js tree "directory path"
                    node main.js organize "directory path"
                    node main.js help
    `);
}