// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const element of arr) {
//     console.log(element);
// }

// Larget element in an array
function printLargestElement(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log("Biggest is:", largest);
}
// printLargetElement(arr);

// Smallest element in an array
// const arr = [27, 30, 30, 57, 7, 6, 19];
function printSmallestElement(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    console.log("Smallest is:", smallest);
}
// printSmallestElement(arr);

// Second largest element in an array
// const arr = [7, -5, 7];
const arr = [27, 30, 30, 57,, 7, 6, 3, 3, 19];
// function printSecondLargestElement(arr) {
//     let largest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     console.log(largest);

//     let secondLargest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > secondLargest && arr[i] != largest) {
//             secondLargest = arr[i];
//         }
//     }
//     console.log({largest, secondLargest});
// }

// printSecondLargestElement(arr);

// Most optimized
function printSecondLargestElement(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (current > largest) {
            secondLargest = largest;
            largest = current;
        } else if (current < largest && current > secondLargest) {
            secondLargest = current;
        }
    }
    console.log("Second Largest Element:", largest === secondLargest ? -1 : secondLargest);

}
printSecondLargestElement(arr);

// Second smallest element in an array
// const arr = [7, -5, 7];
// const arr = [27, 30, 30, 57, 7, 6, 3, 3, 19];
function printSecondSmallestElement(arr) {
    let smallest = arr[0];
    let secondSmallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (current < smallest) {
            secondSmallest = smallest;
            smallest = current;
        } else if (current > smallest && current < secondSmallest) {
            secondSmallest = current;
        }
    }
    console.log({ smallest, secondSmallest });
}

// printSecondSmallestElement(arr);