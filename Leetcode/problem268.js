// brute - using hashing
// function missingNumber(nums) {
//     const freq = new Array(nums.length + 1).fill(0);

//     for (const n of nums) {
//         freq[n] = 1;
//     }

//     for (let i = 0; i < freq.length; i++) {
//         if(freq[i] == 0)
//             return i;
//     }

//     return -1;
// }

// approach 2 - using temp array
// function missingNumber(nums) {
//     const temp = new Array(nums.length + 1).fill(-1);

//     for (const n of nums) {
//         temp[n] = n;
//     }

//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i] == -1)
//             return i;
//     }

//     return -1;
// }

// approah 3 - using XOR
// function missingNumber(nums) {
//     let res = 0;
//     for (const n of nums) {
//         res ^= n;
//     }

//     for (let i = 0; i <= nums.length; i++) {
//         res ^= i;
//     }

//     return res;
// }

// Approach 4 - Sum of all elememnts
function missingNumber(nums) {
    const n = nums.length;
    const sum1 = n * (n + 1) / 2;
    const sum2 = nums.reduce((acc, ele) => acc + ele, 0);

    return sum1 - sum2;
}

// Test Cases
// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([10,9,8,7,6,5,4,3,2,1,0]));
// console.log(missingNumber([0,1,2,4,5,6,7,8,9]));
// console.log(missingNumber([1,0,3,4]));
// console.log(missingNumber([1]));

// Time & Space Complexity Analysis
// brute - time - O(n+n) = O(n)
//         space - S(n)
// approach 2 - time - O(n+n) = O(n)
//              space - S(n)
// approach 3 - time - O(n+n) = O(n)
//              space - S(1)
// approach 4 - time - O(n) = O(n)
//              space - S(1)


