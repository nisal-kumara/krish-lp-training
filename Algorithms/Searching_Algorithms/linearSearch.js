const arr = [2, 12, 28, 35, 45, 55, 61, 73, 78, 88, 99, 111];

function linearSearch(arr, x) {
    //iterate through all the elements of arr to look for x.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return `${i} is the index for ${x}`;
        }
    }
    //x not found in the array
    return `${x} is not exists in this array!!!`;
}

module.exports = linearSearch(arr, 28);