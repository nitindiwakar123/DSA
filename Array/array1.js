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
// const arr = [27, 30, 30, 57,, 7, 6, 3, 3, 19];
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
// printSecondLargestElement(arr);

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

// Check the array is sorted or not
// const newArr = [27, 30, 30, 57, 7, 6, 3, 3, 19];
// const newArr = [1, 2, 2, 3, 3, 4, 7];
function isSortedArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            console.log("Not Sorted Array!", arr);
            return;
        }
    }
    console.log("Array is Sorted!", arr);

}

// isSortedArray(newArr);


// Remove duplicates in place from sorted array
const newArr = [1, 2, 2, 3, 3, 4, 4, 4, 7, 7, 7];

// brute force
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// function removeDuplicates(arr) {
//     const set = new Set(arr);
//     let index = 0;
//     for (const element of set) {
//         arr[index] = element;
//         index++;
//     }
//     return arr;
// }

// Optimal approach - two pointer
function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] != arr[i]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }

    console.log(arr);

}

// console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3]));

// Left rotate the array by one place
function rotateArray(arr, d) {
    const temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
    console.log(arr);
}

// Left rotate the array by d places
// brute force
// function rotateArray(arr, d) {
//     d = d%arr.length;

//     const temps = [];
//     for (let i = 0; i<d; i++) {
//         temps.push(arr[i]);
//     }

//     for (let i = d; i<arr.length; i++) {
//         arr[i-d] = arr[i];
//     }

//     for (let i = arr.length-d; i<arr.length; i++) {
//         arr[i] = temps[i - (arr.length-d)];
//     }
//     console.log(arr);
// }

// rotateArray([1, 2, 3, 4, 5], 2); 
// rotateArray([5, 6, 7, 18, 22, 30], 15);
// rotateArray([5, 6, 7, 18, 22, 30], 2); 

// faster but consuming more space due to temps array

// alternative a little slower than previous one but less in memory consuming

function reverse(arr, start, end) {
    while (start <= end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateArray(arr, d) {
    const n = arr.length;
    d = d % n;

    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);

    console.log(arr);

}

// rotateArray([5, 6, 7, 18, 22, 30], 15); 
// rotateArray([5, 6, 7, 18, 22, 30], 2); 

// Move all zeroes to the end of the array
// brute
// function moveZeroes(nums) {
//     const temp = [];
//     for (const n of nums) {
//         if (n != 0)
//             temp.push(n);
//     }

//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = temp[i];
//     }

//     for (let i = temp.length; i < nums.length; i++) {
//         nums[i] = 0;
//     }

//     return nums;
// }

// optimal
function moveZeroes(nums) {
    let j = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            j = i;
            break;
        }
    }

    if (j == -1) return nums;

    for (let i = j + 1; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            nums[i] = 0;
            j++;
        }
    }

    return nums;
}

console.log(moveZeroes([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));