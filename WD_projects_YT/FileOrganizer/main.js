const fs = require("fs");
const path = require("path");

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


//organize function
function organizeFn(dirPath) {
    // console.log("Organize command implemented for ", dirPath);
    
    // 1. input -> directory path
    if(dirPath == undefined){
        console.log("Kindly enter the path");
    }else{
        let doesExist = fs.existsSync(dirPath); //it check if the directory exist or not
        if(dirPath){
            // 2. create - > organized_file -> directory
            let destPath = path.join(dirPath,"organized_files"); //destination path
            if(fs.existsSync(destPath) == false){ //check if the file exist or not
                fs.mkdirSync(destPath); //makes an folder 
            }
        }else{
            console.log("Kindly enter the path");
            return;
        }
    }
    // 3. identify category of all the files present in that input directory
    // 4/ copy/ cut files to that organized directory inside of any category folder
    
}



//help function
function helpFn() {
    console.log(`
    List of All the commands:
                    node main.js tree "directory path"
                    node main.js organize "directory path"
                    node main.js help
    `);
}