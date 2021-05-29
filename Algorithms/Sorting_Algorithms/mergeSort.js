let nums = [21, 46, 8789, 02, 99, 788, 500, 322, 1000, 11];

function merge(arr1, arr2) {
    let sorted = []
    //loop ends if any one of the array gets empty
    while (arr1.length && arr2.length) {
        //pick the smaller element among the smallest elements between these 2 arrays 
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift())
        } else {
            sorted.push(arr2.shift())
        }
    }
    //concatenating the leftover elements
    return [...sorted, ...arr1, ...arr2]
}

function mergeSort(array) {
    const half = array.length / 2

    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

module.exports = mergeSort(nums);