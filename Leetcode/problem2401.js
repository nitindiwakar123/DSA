// brute
// Time - O(n^2)
// Space - O(1)
// function longestNiceSubarray(nums) {
//     const n = nums.length;
//     if (n == 1)
//         return 1;

//     let maxLength = 1;

//     for (let i = 0; i < n; i++) {
//         let usedBits = nums[i];
//         let currLength = 1;
//         for (let j = i + 1; j < n; j++) {
//             if ((usedBits & nums[j]) != 0) break;
//             usedBits |= nums[j];
//             currLength++;
//         }
//         maxLength = Math.max(maxLength, currLength);
//     }

//     return maxLength;
// }

// better
function longestNiceSubarray(nums) {
    let maxLength = 1;
    let l = 0;
    let r = 1;
    let usedBits = nums[l];

    while (r < nums.length) {

        while ((usedBits & nums[r]) != 0) {
            usedBits ^= nums[l];
            l++;
        }

        usedBits |= nums[r];
        maxLength = Math.max(maxLength, r - l + 1);
        r++;
    }

    return maxLength;
}

// Test Cases
// console.log(longestNiceSubarray([1,3,8,48,10, 3, 8, 48, 4]));
console.log(longestNiceSubarray([2,4,8,2,8,16,32])); // 4
// console.log(longestNiceSubarray([3,1,5,11,13]));
// console.log(longestNiceSubarray([2,4,8,16]));
// console.log(longestNiceSubarray([1,2,4,3]));
// console.log(longestNiceSubarray([5,2]));
// console.log(longestNiceSubarray([8,1,2,4]));

// console.log(longestNiceSubarray([1, 1])); // 1
// console.log(longestNiceSubarray([0])); // 1
// console.log(longestNiceSubarray([0, 0, 0])); // 3
// console.log(longestNiceSubarray([0, 1, 2, 4])); // 4
// console.log(longestNiceSubarray([15, 1, 2, 4])); // 3
// console.log(longestNiceSubarray([16, 8, 4, 2, 1])); // 5
// console.log(longestNiceSubarray([6, 10, 12])); // 1
// console.log(longestNiceSubarray([9, 2, 4, 16])); // 4
// console.log(longestNiceSubarray([32, 16, 8, 4, 2, 1])); // 6
// console.log(longestNiceSubarray([1, 2, 4, 8, 16, 3])); // 5

// console.log(longestNiceSubarray([1])); // 1
// console.log(longestNiceSubarray([2, 4, 8, 16])); // 4
// console.log(longestNiceSubarray([7, 7, 7])); // 1
// console.log(longestNiceSubarray([1, 2, 4, 3])); // 3
// console.log(longestNiceSubarray([5, 2])); // 2
// console.log(longestNiceSubarray([5, 3])); // 1
// console.log(longestNiceSubarray([1, 2, 1])); // 2
// console.log(longestNiceSubarray([8, 1, 2, 4])); // 4

// console.log(longestNiceSubarray([1, 2, 3, 4])); // 2
// console.log(longestNiceSubarray([2, 1, 4, 8, 3])); // 4
// console.log(longestNiceSubarray([10, 5, 2])); // 2
// console.log(longestNiceSubarray([1, 4, 2, 8, 5])); // 4
// console.log(longestNiceSubarray([31, 1, 2, 4, 8, 16])); // 5
// console.log(longestNiceSubarray([744437702, 379056602, 145555074, 392756761, 560864007, 934981918, 113312475, 1090, 16384, 33, 217313281, 117883195, 978927664])); 
