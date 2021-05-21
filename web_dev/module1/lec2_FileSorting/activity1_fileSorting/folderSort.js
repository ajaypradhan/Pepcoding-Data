let fs = require("fs"); //file system module
let extensionsMapping = require("./util.js"); //util file data export


let testFolderPath = "./Downloads";  //folder path
let allFiles = fs.readdirSync(testFolderPath); //get all the files name in the folder
// console.log(allFiles);



//get the extension of all the files
function getExtension(file){
    file = file.split(".");
    return file[1];
}


function checkExtensionFolder(extension){
    // extension = "doc";
    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping){
        let extensions = extensionsMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName = extensionFolderName+"/"+key;
            break;
        }
    }
    // extensionFolderName = 'Documents'
    // "./Downloads"
    // let folderToBeChecked = testFolderPath+"/"+extensionFolderName;
    // "./Downloads/Documents"
    let isFolderExist =  fs.existsSync(extensionFolderName);
    if(!isFolderExist){
        fs.mkdirSync(extensionFolderName);
    }
    return extensionFolderName;
}

//copy the file to designated folder and delete the file
function moveFile(file , extensionFolderName){
    let sourceFile = testFolderPath+"/"+file;  //file is used to specifiy the file after the source loaction
    let destinationFile = extensionFolderName+"/"+file; 

    // copy file from the source path to destination path !!
    fs.copyFileSync(sourceFile , destinationFile);

    // then delete file from the source path !!
    fs.unlinkSync(sourceFile);
}

//file pass throught the loop to get the extention and sorting 
for(let i=0 ; i<allFiles.length ; i++){
    sortFile(allFiles[i]);  //
}

//file are sorting in the folder
function sortFile(file){
    let extension = getExtension(file); //get the extion from the file
    // console.log(extension);
    let extensionFolderName = checkExtensionFolder(extension);   //
    moveFile(file , extensionFolderName );  //move the file 
}