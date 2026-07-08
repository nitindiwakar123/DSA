// 209. Minimum Size Subarray Sum

// brute
// Time - O(n^2)
// Space - O(1)
// Time limit exceed in leetcode

// function minSubArrayLen(target, nums) {
//     const n = nums.length;
//     let minLength = n+1;

//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = i; j < n; j++) {
//             sum += nums[j];

//             if (sum >= target) {
//                 minLength = Math.min(minLength, j-i+1);
//                 break;
//             };
//         }

//     }

//     return minLength == n+1? 0: minLength;
// }

// Optimal
// Time - O(n+k)
// Space - O(1)
function minSubArrayLen(target, nums) {
    const n = nums.length;
    let minLength = n + 1;
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < n) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];

            left++;
        }
        right++;
    }

    return minLength == n + 1 ? 0 : minLength;
}

// Test Cases
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2

// console.log(minSubArrayLen(4, [1,4,4])); // 1

// console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // 0

// console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])); // 2

// console.log(minSubArrayLen(100, [1,2,3,4,5])); // 0

// console.log(minSubArrayLen(5, [5])); // 1

// console.log(minSubArrayLen(6, [5])); // 0

// console.log(minSubArrayLen(3, [1,1,1])); // 3

// console.log(minSubArrayLen(2, [1,1,1,1])); // 2

// console.log(minSubArrayLen(8, [2,2,2,2])); // 4

// console.log(minSubArrayLen(9, [2,2,2,2])); // 0

// console.log(minSubArrayLen(10, [10,2,3])); // 1

// console.log(minSubArrayLen(6, [1,2,3])); // 3

// console.log(minSubArrayLen(5, [1,2,3])); // 2

// console.log(minSubArrayLen(20, [2,3,1,2,4,3])); // 0

// console.log(minSubArrayLen(1, [1,2,3])); // 1

// console.log(minSubArrayLen(7, [7])); // 1

// console.log(minSubArrayLen(8, [7])); // 0

// console.log(minSubArrayLen(9, [1,2,3,4,5])); // 2

// console.log(minSubArrayLen(5, [2,3])); // 2

// console.log(minSubArrayLen(3, [3,1,1,1])); // 1

// console.log(minSubArrayLen(12, [1,2,3,4,5])); // 3

// console.log(minSubArrayLen(13, [1,2,3,4,5])); // 4

// console.log(minSubArrayLen(14, [1,2,3,4,5])); // 4

// console.log(minSubArrayLen(1000000, [100000,100000,100000,100000,100000,100000,100000,100000,100000,100000])); // 10
