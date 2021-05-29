let nums = [21, 46, 8789, 02, 99, 788, 500, 322, 1000, 11];

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        //get the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            //swapping elements
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

module.exports = selectionSort(nums);