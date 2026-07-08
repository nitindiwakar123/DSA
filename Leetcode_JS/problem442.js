// brute

// by hashing
// time - O(n)
// space - O(n)
// function findDuplicates(nums) {
//     const n = nums.length;
//     const freq = new Array(n).fill(0);
//     const ans = [];

//     for (const num of nums) {
//         freq[num-1]++;

//         if(freq[num-1] >= 2) {
//             ans.push(num);
//         }
//     }

//     return ans;
// }

// by sorting
// time - O(n+n)
// space - O(1)
// function findDuplicates(nums) {
//     const ans = [];
//     nums.sort((a, b) => a-b);

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] == nums[i+1]){
//             ans.push(nums[i]);
//         }
//     }

//     return ans;
// }

// optimal
// time - O(n)
// space - O(1)
function findDuplicates(nums) {
    const n = nums.length;
    if (n == 1) return [];
    const ans = [];

    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        let idx = num - 1;
        if (nums[idx] < 0) {
            ans.push(num);
        } else {
            nums[idx] = -nums[idx];
        }
    }

    return ans;
}

// Test cases
// console.log(findDuplicates([1,2,2,3,3,4,5]));
// [2,3]

// console.log(findDuplicates([4,3,2,7,8,2,3,1])); 
// // [2,3]

// console.log(findDuplicates([1,1,2]));
// // [1]

// console.log(findDuplicates([1]));
// // []

// console.log(findDuplicates([1,2,3,4,5]));
// // []

// console.log(findDuplicates([2,2]));
// // [2]

// console.log(findDuplicates([1,1]));
// // [1]

// console.log(findDuplicates([5,4,3,2,1,5]));
// // [5]

// console.log(findDuplicates([2,3,4,5,6,7,8,1,2]));
// // [2]

// console.log(findDuplicates([10,9,8,7,6,5,4,3,2,1]));
// // []

// console.log(findDuplicates([10,9,8,7,6,5,4,3,2,1,10]));
// // [10]

// console.log(findDuplicates([6,5,4,3,2,1,6]));
// // [6]

// console.log(findDuplicates([3,1,2,3]));
// // [3]

// console.log(findDuplicates([8,7,6,5,4,3,2,1,8]));
// // [8]

// console.log(findDuplicates([9,1,2,3,4,5,6,7,8,9]));
// // [9]

// console.log(findDuplicates([2,1,4,5,6,7,8,9,3,2]));
// // [2]

// console.log(findDuplicates([1,2,3,4,5,6,7,8,9,10,5]));
// // [5]

// console.log(findDuplicates([4,4,1,2,3]));
// // [4]

// console.log(findDuplicates([1,2,3,4,5,5]));
// // [5]

// console.log(findDuplicates([2,1,2]));
// // [2]

// console.log(findDuplicates([]));
// // []

// console.log(findDuplicates([1]));
// // []

// console.log(findDuplicates([1,1]));
// // [1]

// console.log(findDuplicates([2,2]));
// // [2]

// console.log(findDuplicates([1,2]));
// // []