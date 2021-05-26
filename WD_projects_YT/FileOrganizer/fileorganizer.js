const fs = require("fs");
const path = require("path");

let inputArr = process.argv.slice(2);
// console.log(inputArr);


let command = inputArr[0];

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pptx", "pdf", "xls", "odt", "ods", "odp", "odf", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"]
}

switch (command) {
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Please input correct command");
        break;
}

function treeFn(dirPath) {
    if (dirPath == undefined) {
        console.log("Kindly enter the correct path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        } else {
            console.log("Kindly enter the path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    //is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    //if file print
    if(isFile == true){
        let fileName  = path.basename(dirPath);
        console.log(indent + "|------" + fileName);
    }else{
        let dirName = path.basename(dirPath)
        console.log(indent + "|______"+ dirName);
        let children =fs.readdirSync(dirPath)
        for(let i = 0; i < children.length; i++){
            let childPath = path.join(dirPath,children[i]);
            treeHelper(childPath,indent+"\t");
        }
    }
    // if folder go into the folder

}


function organizeFn(dirPath) {
    // 1. input -> directory path
    let destPath;
    if (dirPath == undefined) {
        console.log("Kindly enter the correct path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            // 2. creat -> organized folder -> directory
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
                console.log("organized folder created");
            }
        } else {
            console.log("Kindly enter the path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);

}


function organizeHelper(src, dest) {
    // 3. identify the category of all the files in the input directory
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i], " belong to -->  ", category);
            // 4. copy /  cut files to that organized directory inside of any category folder
            sendFiles(childAddress, dest, category);
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    // console.log(ext);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "other";
}

function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath)
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}


function helpFn() {
    console.log(`
    List of All the commands:
                    node main.js tree "directory path"
                    node main.js organize "directory path"
                    node main.js help
    `);
}