// Exercice 03: 
// A program to find the missing number from the given sequence
let nums = [2, 1, 20, 19, 7, 18, 4, 17, 9, 16, 6, 15, 5, 14, 8, 3, 12, 11, 10]; //13
//using bubbleSort algorithm to, sort the givn array
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            //swapping elements
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function missedNum() {
    //"bubbleSort" will return the sorted array
    let sorted = bubbleSort(nums);
    let j;
    for (let i = 0; i < sorted.length; i++) {
        j = i + 1;
        //check if difference between the numbers is larger than 1
        if (sorted[j] - sorted[i] > 1) return sorted[i] + 1;
    }
}

module.exports.result = missedNum();
module.exports.title = "A program to find the missing number from the given sequence";