// Exercice 01: 
// A program to find the 3rd largest number from an array
let nums = [500, 600, 30, 20, 50, 40, 10, 60, 100];

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
    //return 3rd largest number from the array
    return arr[arr.length - 3];
}

module.exports.result = bubbleSort(nums);
module.exports.title = "A program to find the 3rd largest number from an array";