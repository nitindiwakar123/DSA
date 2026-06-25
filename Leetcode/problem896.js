// brute
// function isMonotonic(nums) {

//     let isIncreasing = false;
//     let isDecreasing = false;

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] < nums[i + 1]) isIncreasing = true;
//         else if (nums[i] > nums[i + 1]) isDecreasing = true;

//     }

//     if(isIncreasing == isDecreasing && isIncreasing == false) {
//         return true;
//     } else if(isIncreasing == isDecreasing) {
//         return false;
//     } else return isIncreasing != isDecreasing;
// }

// better
// function isMonotonic(nums) {

//     let isIncreasing = false;
//     let isDecreasing = false;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < nums[i + 1]) {
//             if (isDecreasing)
//                 return false;

//             isIncreasing = true;
//         } else if (nums[i] > nums[i + 1]) {
//             if (isIncreasing)
//                 return false;

//             isDecreasing = true;
//         }

//     }
//     return true;
// }

// optimal
// time complexity - O(n)
// space complexity - S(1)
function isMonotonic(nums) {

    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1])
            isIncreasing = false;
        else if (nums[i] > nums[i - 1])
            isDecreasing = false;

        if (!isIncreasing && !isDecreasing)
            return false
    }
    return true;
}


// Test Cases
// console.log(isMonotonic([1, 1, 2, 2, 6, 3]));
// console.log(isMonotonic([1,2,2,3]));
// console.log(isMonotonic([6, 5, 4, 4]));
// console.log(isMonotonic([-1, -2, 0, 5, 6]));
// console.log(isMonotonic([-2,-1, 0, 5, 6]));
// console.log(isMonotonic([-5, -4, -3, -2, -1]));
// console.log(isMonotonic([1,1,1]));
