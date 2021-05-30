// Exercice 02: 
// A program to count repetition characters from given sentence
let sentence = "I am Nisal Pubudu Kumara and I am 25 years old";

function repetitionChar(sentence, x) {
    //used split() method to seperate each character from given sentence
    let charArray = sentence.toLowerCase().split("");
    let lowX = x.toLowerCase();
    let count = 0;
    //iterate through every character on the array
    for (let i = 0; i < charArray.length; i++) {
        // count will increment when it found the given char.
        if (charArray[i] === lowX) count++;
    }
    return count;
}

module.exports.result = repetitionChar(sentence, "a");
module.exports.title = "A program to count repetition characters from given sentence";