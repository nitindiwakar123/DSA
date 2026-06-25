// WAP to swap two index values of the array.
function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    console.log(arr);

}

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

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

    while (fast < arr.length - 1) {
        fast += 2;
        slow += 1;
    }

    reverseArray2(arr, 0, slow);
    reverseArray2(arr, slow + 1, arr.length - 1);

    return arr;
}

// console.log(reverseHalfs([10, 20, 30, 40, 50, 60, 70]));

// WAP to zigzag merge two arrays into a single array.
function mergeTwoArrays(arr1, arr2) {
    let ans = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < arr1.length && j < arr2.length) {
        ans[k++] = arr1[i++];
        ans[k++] = arr2[j++];         
    }

    while (i < arr1.length) {
        ans[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        ans[k++] = arr2[j++];
    }

    return ans;
}

// console.log(mergeTwoArrays([20, 30, 50], [2, 4, 6, 8, 10]));
