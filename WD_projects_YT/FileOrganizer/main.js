const fs = require("fs");
const path = require("path");

let inputArr = process.argv.slice(2);  //take input from command line

// console.log(inputArr);
//node main.js tree "directory path"
//node main.js organize "directory path"
//node main.js help

let command = inputArr[0];

let types = {
    media : ["mp4","mkv"],
    archives : ["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents : ["docx","doc","pptx","pdf","xls","odt","ods","odp","odf","txt","ps","tex"],
    app : ["exe","dmg","pkg", "deb"]
}


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
    let destPath;
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
    organizeHelperFn(dirPath,destPath);
    // 3. identify category of all the files present in that input directory
    
}

//organizeHelperFn
function organizeHelperFn(src, dest) {
    let childNames =fs.readdirSync(src); //get all the files
    // console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile(); //check wether it is a file or not
        if(isFile){
            // console.log(childNames[i]);
            let category = getCategoryFn(childNames[i]);
            // 4/ copy/ cut files to that organized directory inside of any category folder
        }
    }
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