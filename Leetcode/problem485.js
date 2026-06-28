// brute
// function findMaxConsecutiveOnes(nums) {
//     let maxCount = 0;
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] != 1) {
//             count = 0;
//         } else {
//             count++;
//             maxCount = Math.max(maxCount, count);
//         }
//     }

//     return maxCount;
// }

// approach 2
// function findMaxConsecutiveOnes(nums) {
//     let maxCount = 0;
//     let left = 0;
//     let right = 0;

//     while (right < nums.length) {
//         if(nums[right] != 1) {
//             left = right+1;
//             right = right+1;
//         } else {
//             maxCount = Math.max(maxCount, right - left + 1); 
//             right++;
//         }
//     }
//     return maxCount;
// }

// approach 3
function findMaxConsecutiveOnes(nums) {

    let tempCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
            tempCount++;
        } else {
            if(tempCount > maxCount) {
                maxCount = tempCount;
            }
            tempCount = 0;
        }
    }

    return tempCount > maxCount? tempCount: maxCount;
}

// Time & Space Complexity
// brute - O(n), S(1)
// approach 2 - O(n), S(1)
// approach 3 - O(n), S(1)

// Test Cases
// console.log(findMaxConsecutiveOnes([1]));
// console.log(findMaxConsecutiveOnes([1,1,1,1,1]));
// console.log(findMaxConsecutiveOnes([0,0,0,0]));
// console.log(findMaxConsecutiveOnes([1,1,1,0,0]));
// console.log(findMaxConsecutiveOnes([0,0,1,1,1]));
// console.log(findMaxConsecutiveOnes([0,1,1,1,0]));
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
// console.log(findMaxConsecutiveOnes([1,1,1,1,0,1]));
// console.log(findMaxConsecutiveOnes([1,0,1,1,1,1]));
// console.log(findMaxConsecutiveOnes([1,0,1,0,1,0,1]));
// console.log(findMaxConsecutiveOnes([1,1,0,1,0,1,1,1,0,1,1]));
// console.log(findMaxConsecutiveOnes([0,0,0,1,1,1,1,1]));
