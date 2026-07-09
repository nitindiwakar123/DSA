// 1394. Find Lucky Integer in an Array

// brute
// time - O(n^2)
// space - O(1)
// function findLucky(arr) {
//     const n = arr.length;
//     arr.sort((a, b) => a - b);
//     let largestLucky = -1;
//     for (let i = 0; i < n; i++) {
//         if (i > 0 && arr[i] == arr[i - 1]) continue;
//         let freq = 0;
//         for (let j = i; j < n; j++) {
//             if (arr[i] == arr[j])
//                 freq++;
//         }
//         if (freq == arr[i] && arr[i] > largestLucky) {
//             largestLucky = arr[i];
//         }
//     }

//     return largestLucky;
// }

// better
// time - O(3n)
// space - O(max)
// function findLucky(arr) {
//     let max = 0;
//     for (const n of arr) {
//         if (n > max)
//             max = n;
//     }

//     const freq = new Array(max).fill(0);

//     for (const n of arr) {
//         freq[n - 1]++;
//     }

//     let largestLucky = -1;
//     for (let i = 1; i <= freq.length; i++) {
//         if (freq[i - 1] == i && i > largestLucky)
//             largestLucky = i;
//     }

//     return largestLucky;
// }

// optimal 
// using hashmap
// time - O(2n)
// space - O(n)
// function findLucky(arr) {
//     const hashMap = new Map();
//     let largestLucky = -1;

//     for (const n of arr) {
//         hashMap.set(n, (hashMap.get(n) ?? 0) + 1);
//     }

//     for (const key of hashMap.keys()) {
//         if (hashMap.get(key) == key && key > largestLucky)
//             largestLucky = key;
//     }

//     return largestLucky;
// }

// using hash array
// time - O(2n)
// space - O(500)
// faster than hashmap implementation (beats 100%)
function findLucky(arr) {
    const freq = new Array(500).fill(0);

    for (const n of arr) {
        freq[n - 1]++;
    }

    let largestLucky = -1;
    for (let i = 1; i <= freq.length; i++) {
        if (freq[i - 1] == i && i > largestLucky)
            largestLucky = i;
    }

    return largestLucky;
}

// test cases
// console.log(findLucky([14, 14, 19, 11, 6, 4, 16, 17, 3, 7, 7, 5, 15, 12, 3, 20, 1, 13, 5, 20, 1, 12, 10, 2])); // -1
// console.log(findLucky([2, 2, 3, 4])); // 2

// console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3

// console.log(findLucky([2, 2, 2, 3, 3])); // -1

// console.log(findLucky([5])); // -1

// console.log(findLucky([1])); // 1

// console.log(findLucky([4,4,4,4])); // 4

// console.log(findLucky([7,7,7,7,7,7,7])); // 7

// console.log(findLucky([1,1,2,2,2])); // -1

// console.log(findLucky([3,3,3,2,2])); // 3

// console.log(findLucky([1,1,1,2,2,2])); // -1

// console.log(findLucky([5,5,5,5,5,3,3,3])); // 5

// console.log(findLucky([2,2,3,3,3,4,4,4,4])); // 4

// console.log(findLucky([6,6,6,6,6,6])); // 6

// console.log(findLucky([1,2,3,4,5])); // 1

// console.log(findLucky([8,8,8,8,8,8,8,8])); // 8

// console.log(findLucky([9,9,9,9,9,9,9,9])); // -1

// console.log(findLucky([10,10,10,10,10,10,10,10,10,10])); // 10

// console.log(findLucky([2,2,5,5,5,5,5])); // 5

// console.log(findLucky([1,1,2,2,3,3,3,4,4,4,4])); // 4

// console.log(findLucky([5,5,5,5,5,2,2,1])); // 5

// // Maximum lucky integer should be returned
// console.log(findLucky([1,2,2,3,3,3,4,4,4,4])); // 4

// // No lucky integer
// console.log(findLucky([6,6,6,5,5,4,4,4])); // -1

// // Multiple frequencies but only one lucky
// console.log(findLucky([8,8,8,8,8,8,8,8,1,1])); // 8

// // Large mixed case
// console.log(findLucky([
//     1,
//     2,2,
//     3,3,3,
//     5,5,5,5,5,
//     7,7,7,
//     9
// ])); // 5