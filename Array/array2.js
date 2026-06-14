// WAP to swap two index values of the array.
function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    console.log(arr);

}

function reverseArray(arr) {
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    return arr;
}

// console.log(reverseArray([10, 20, 30, 40, 50, 60, 70]));
