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

function reverseArray2(arr, start, end) {
    let left = start;
    let right = end;

    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    return arr;
}

function reverseHalfs(arr) {
    let fast = 0;
    let slow = 0;

    while (fast < arr.length-1) {
        fast += 2;
        slow += 1;
    }

    reverseArray2(arr, 0, slow);
    reverseArray2(arr, slow+1, arr.length-1);

    return arr;
}

console.log(reverseHalfs([10, 20, 30, 40, 50, 60, 70]));
