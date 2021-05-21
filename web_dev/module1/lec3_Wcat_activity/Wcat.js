let fs = require("fs");

let f1Data = fs.readFileSync("./file1.txt", "utf8");
let f2Data = fs.readFileSync("./file2.txt", "utf8");


//-S Flag
function applySFlag(data) {
    let emptySpaceIncluded = false;
    let removeSpace = [];
    
    let splitedData = data.split("\r\n");
    console.log(splitedData);

    for (let i = 0; i < splitedData.length; i++) {
        if (splitedData[i] == "" && emptySpaceIncluded == false) {
            removeSpace.push(splitedData[i]);
            emptySpaceIncluded  = true;
        }else if(splitedData[i] != "" ){
            removeSpace.push(splitedData[i])
            if (i < splitedData.length - 2) {
                emptySpaceIncluded = false;
            }
        }  
    }

    let SFlag = removeSpace.join("\r\n");
    return SFlag;
    
}

// let removedSpaceString = applySFlag(f1Data);
// console.log(removedSpaceString);

//B Flag
function applyBFlag(data) {
    let count  = 1;
    let splitedData = data.split("\r\n");

    for(let i = 0; i < splitedData.length; i++){
        if (splitedData[i] != "") {
            splitedData[i] = `${count}. ${splitedData[i]} `;
            // splitedData[i] = count + "." + splitedData[i];
            count++;
        }
    }

    let BFlag = splitedData.join("\r\n");
    return BFlag;
}

console.log(applyBFlag(f1Data));


//N Flag
function applyNFlag(data) {
    let count  = 1;
    let splitedData = data.split("\r\n");

    for(let i = 0; i < splitedData.length; i++){
        splitedData[i] = `${count}. ${splitedData[i]} `;
        // splitedData[i] = count + "." + splitedData[i];
        count++;
    }

    let NFlag = splitedData.join("\r\n");
    return NFlag;
}

// console.log(applyNFlag(f1Data));;
