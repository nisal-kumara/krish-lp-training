let fs = require("fs");

let nameArray = [];
let sorted = [];
//using an object to store "wordCount" as property and "name" as it's values
let obj = {
}

function checkFile() {
    try {
        //read names from text file, and save them to an array
        let nameList = fs.readFileSync("./NameList.txt").toString("utf-8");
        nameArray = nameList.split(",");
    } catch (err) {
        //to display error message on both terminal & browser
        console.log("Text file doesn't exists");
        sorted = "Text file doesn't exists";
    }
}

function countName() {
    checkFile();
    //for loop to itereate through nameArray
    for (let i = 0; i < nameArray.length; i++) {
        let wordCount = 0;
        //"name" field will be used to save on the "obj" later
        let name = nameArray[i].trim();
        let nameL = name.toLowerCase();
        //for loop to iterate through every character of the name
        for (let j = 0; j < nameL.length; j++) {
            //using ASCII code as the value of characters
            let asciiCode = nameL[j].charCodeAt();
            //ASCII code will be count only if its between 97 & 122 (to avoid numbers & special char.)
            if (asciiCode >= 97 && asciiCode <= 122) wordCount += asciiCode;
        }
        //if the "wordCount" already exist as a property, the "name" will be pushed to it's array
        if (wordCount in obj) obj[wordCount].push(name);
        //else create a property from "wordCount" and add "name" as an array item
        else obj[wordCount] = [name];
    }
}

function sortedArray() {
    countName();
    //iterate throught "obj"
    for (let x in obj) {
        //check if current property have more than 1 element in the array
        if (obj[x].length > 1) {
            for (let y in obj[x]) {
                //if thue, each name will be pushed to "sorted" array
                sorted.push(obj[x][y]);
            }
        } else sorted.push(obj[x][0]);
    }
    return sorted;
}

module.exports = sortedArray();



