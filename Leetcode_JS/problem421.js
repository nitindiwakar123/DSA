// brute (TLE)
// time - O(n^2)
// space - O(1)
// function findMaximumXOR(nums) {
//     const n = nums.length;
//     let max = 0;

//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             max = Math.max(max, nums[i]^nums[j]);
//         }
//     }

//     return max;
// }

// pending...

// Test Cases
// console.log(findMaximumXOR([3,10,5,25,2,8])); // 28

// console.log(findMaximumXOR([0])); // 0

// console.log(findMaximumXOR([2,4])); // 6

// console.log(findMaximumXOR([8,10,2])); // 10

// console.log(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70])); // 127

// console.log(findMaximumXOR([1,2])); // 3

// console.log(findMaximumXOR([1,1])); // 0

// console.log(findMaximumXOR([0,0,0])); // 0

// console.log(findMaximumXOR([5,5,5,5])); // 0

// console.log(findMaximumXOR([1,2,3])); // 3

// console.log(findMaximumXOR([7,7,8])); // 15

// console.log(findMaximumXOR([15,0])); // 15

// console.log(findMaximumXOR([1023,512,256,128])); // 895

// console.log(findMaximumXOR([1,4,16,64,256])); // 320

// console.log(findMaximumXOR([9,8,7,6,5])); // 15

// console.log(findMaximumXOR([31,30,29,28])); // 3

// console.log(findMaximumXOR([100,200,300,400,500])); // 444

// console.log(findMaximumXOR([2147483647,0])); // 2147483647

// console.log(findMaximumXOR([2147483647,1])); // 2147483646

// console.log(findMaximumXOR([1,3,5,7,9,11,13,15])); // 14
