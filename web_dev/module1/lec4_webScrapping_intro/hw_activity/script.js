// website link
let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

// module inport
const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");


request(matchLink ,cb);

function cb(error , response , data) {
    // console.log(data); 
    // fs.writeFileSync("./match.html", data); 
    getMaxSix(data); 
}


//function of maximum no of six
function getMaxSix(data) {
    let myDocument = cheerio.load(data);
    let bothBattingTable = myDocument(".table.batsman");

    let batsmanName;
    let maxSix;

    for(let i = 0; i< bothBattingTable.length; i++){
        let battingTable = myDocument(bothBattingTable[i]);
        let allTableRows = battingTable.find("tbody tr");
        
        for(let j = 0; j < allTableRows.length; j = j + 2){
            let allTds = myDocument(allTableRows[j]).find("td");
            if(i == 0 && j == 0){
                batsmanName = myDocument(allTds[0]).find("a").text();
                maxSix = myDocument(allTds[6]).text();
            }else{
                let currentSix = myDocument(allTds[6]).text();
                if(currentSix > maxSix){
                    batsmanName = myDocument(allTds[0]).find("a").text();
                    maxSix = currentSix;
                }
            }
        }
    }
    
    console.log("Name of the Batsman with highest six: " + batsmanName);
    console.log("No of six: " + maxSix);

}
