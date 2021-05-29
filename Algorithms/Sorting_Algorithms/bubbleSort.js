let nums = [21, 46, 8789, 02, 99, 788, 500, 322, 1000, 11];

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

module.exports = bubbleSort(nums);