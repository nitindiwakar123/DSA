// brute
// time - O(n^2)
// space - O(1)
// function longestOnes(nums, k) {
//     let maxOnes = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let temp = k;
//         let tempCount = 0;
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] == 0 && temp == 0) break;

//             if (nums[j] == 0 && temp > 0) temp--;

//             tempCount++;
//         }
//         maxOnes = Math.max(maxOnes, tempCount);
//     }

//     return maxOnes;
// }

// function longestOnes(nums, k) {
//     let maxOnes = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let zeroes = 0;
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] == 0) zeroes++;

//             if (zeroes <= k) {
//                 maxOnes = Math.max(maxOnes, j - i + 1);
//             } else
//                 break;
//         }
//     }

//     return maxOnes;
// }

function longestOnes(nums, k) {
    let maxOnes = 0;
    let l = 0;
    let r = 0;
    let zeroes = 0;

    while (r < nums.length) {
        if (nums[r] == 0)
            zeroes++;

        if (zeroes <= k) {
            maxOnes = Math.max(maxOnes, r - l + 1);
        } else {
            while (nums[l] != 0)
                l++;

            l++;
            zeroes--;
        }
        r++;
    }

    return maxOnes;
}

// Test Cases
// console.log(longestOnes([0], 1));
// console.log(longestOnes([1], 0));
// console.log(longestOnes([1,0,1,1,0,1], 0));
// console.log(longestOnes([1,0,1,1,0], 1));
// console.log(longestOnes([0,1,0,1,0], 3));
// console.log(longestOnes([1,0,1,1], 5));
// console.log(longestOnes([0,0,1,1,1], 1));
// console.log(longestOnes([1,1,0,0,0,0,1,1], 2));
// console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
// console.log(longestOnes([1, 1, 1, 1], 2));
// console.log(longestOnes([1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
