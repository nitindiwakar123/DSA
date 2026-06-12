// print array elements from 0 index
function printELements(arr, index) {
    if (index == arr.length)
        return;
    console.log(arr[index]);
    printELements(arr, ++index);
}

// printELements([1, 2, 3, 4], 0);

// print array elements from last index
function printELementsReverse(arr, index) {
    if (index == arr.length)
        return;

    printELementsReverse(arr, index + 1);
    console.log(arr[index]);
}

// printELementsReverse([1, 2, 3, 4], 0);

