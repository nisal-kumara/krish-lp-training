let nums = [21, 46, 8789, 02, 99, 788, 500, 322, 1000, 11];

function quickSort(arr, left, right) {
    //index returned from partition method
    let p = partition(arr, left, right);
    //more elements on the left side of the pivot(p)
    if (left < p - 1) {
        quickSort(arr, left, p - 1)
    }
    //more elements on the right side of the pivot(p)
    if (right > p) {
        quickSort(arr, p, right);
    }
    return arr;
}

function partition(arr, left, right) {

    //get middle element
    let pivot = arr[Math.floor(left + (right - left) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        //swapping elements
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            //increment the left pointer while decrementing the right pointer
            left++;
            right--;
        }
    }
    return left;
}

module.exports = quickSort(nums, 0, nums.length - 1);
