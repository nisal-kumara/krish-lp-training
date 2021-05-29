const arr = [2, 12, 28, 35, 45, 55, 61, 73, 78, 88, 99, 111];

function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    //iterate until left index get larger than right
    while (left <= right) {
        //get the middle index
        let mid = Math.floor(left + (right - left) / 2);
        //comparing x with middle value
        if (arr[mid] === x) {
            return `${mid} is the index for ${x}`;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    //x not found in the array
    return `${x} is not exists in this array!!!`;
}

module.exports = binarySearch(arr, 35);