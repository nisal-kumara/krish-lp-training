// Exercice 04: 
// A program to find, if two given words are Anagram of not
function checkAnagram(word1, word2) {
    //check if those 2 words are equal
    if (word1 === word2) return "These are Anagram";
    //check if length is equal and then use split(), sort(), & join() methods on both words
    else if (word1.length === word2.length) {
        let a = word1.split("").sort().join("");
        let b = word2.split("").sort().join("");
        //check if those two equl now, and return the result
        if (a === b) return "These are Anagram";
    }
    else return "These are NOT Anagram";
}

module.exports.result = checkAnagram("silent", "listen");
module.exports.title = "A program to find, if two given words are Anagram of not";