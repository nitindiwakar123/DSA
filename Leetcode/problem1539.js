// brute
// function findKthPositive(arr, k) {
//     let max = arr[0];
//     for (const n of arr) {
//         if (n > max)
//             max = n;
//     }

//     let count = 0;
//     let i = 1;
//     let j = 0;
//     while (i <= max) {
//         if (arr[j] != i) {
//             count++;
//             if (count == k)
//                 return i;
//         } else if (arr[j] == i) {
//             j++;
//         }
//         i++;
//     }

//     while (true) {
//         max++;
//         count++;
//         if (count == k)
//             return max;
//     }
// }

// better
// function findKthPositive(arr, k) {
//     let max = arr[0];
//     for (const n of arr) {
//         if (n > max)
//             max = n;
//     }

//     const freq = new Array(max - 1).fill(0);

//     for (const n of arr) {
//         freq[n - 1] = 1;
//     }

//     let count = 0;
//     for (let i = 0; i < freq.length; i++) {
//         if (freq[i] == 0) {
//             count++;

//             if (count == k)
//                 return i + 1;
//         }
//     }

//     while (true) {
//         max++;
//         count++;

//         if (count == k)
//             return max;
//     }
// }

// optimal
function findKthPositive(arr, k) {
    for (const n of arr) {
        if (n <= k)
            k++;
        else
            return k;
    }
    
    return k;
}



// Test Cases
// console.log(findKthPositive([2, 3, 4, 7, 11], 5));
// console.log(findKthPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5));
// console.log(findKthPositive([1, 2, 3, 4], 2));
// console.log(findKthPositive([1], 1));
// console.log(findKthPositive([2], 1));
// console.log(findKthPositive([10], 5));
// console.log(findKthPositive([1,2,3], 5));
// console.log(findKthPositive([1,3,5,7], 2));
// console.log(findKthPositive([2,4,5,10], 5));
// console.log(findKthPositive([1,2,3,4,5], 1));
// console.log(findKthPositive([3,4,5], 2));
// console.log(findKthPositive([5,6,7,8,9], 9));

