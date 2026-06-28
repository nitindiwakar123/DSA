// brute
// function maxProduct(nums) {
//     let maxValue = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const currValue = (nums[i] - 1) * (nums[j] - 1);
//             maxValue = Math.max(maxValue, currValue);
//         }
//     }

//     return maxValue;
// }

// optimal
function maxProduct(nums) {
    let largest = nums[0];
    let secondLargest = 0;

    for (const n of nums) {
        if (n >= largest) {
            secondLargest = largest;
            largest = n
        } else if (n < largest && n > secondLargest) {
            secondLargest = n;
        }
    }

   return (largest - 1) * (secondLargest - 1);
}

// Time & Space Complexity
// brute - O(n^2), S(1)
// optimal - O(n), S(1)

// Test Cases
// console.log(maxProduct([3, 4, 5, 2]));
// console.log(maxProduct([1,5,4,5]));
// console.log(maxProduct([3,7]));
// console.log(maxProduct([10,2,5,2]));
// console.log(maxProduct([2,10,3,9]));
// console.log(maxProduct([9,1,10,8]));
// console.log(maxProduct([6,6,1]));
// console.log(maxProduct([9,9,9]));
// console.log(maxProduct([8,8,7,6]));
// console.log(maxProduct([1,2]));
