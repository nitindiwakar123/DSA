// 283. Move Zeroes


// brute
// function moveZeroes(nums) {

//     const temp = [];

//     for (const n of nums) {
//         if (n != 0)
//             temp.push(n);
//     }

//     for (const n of nums) {
//         if (n === 0)
//             temp.push(n);
//     }

//     for (let i = 0; i < temp.length; i++) {
//         nums[i] = temp[i];
//     }

//     return nums;
// }

// better
// function moveZeroes(nums) {
//     const temp = [];
//     for (const n of nums) {
//         if (n != 0)
//             temp.push(n);
//     }

//     for (let i = 0; i < temp.length; i++) {
//         nums[i] = temp[i];
//     }

//     for (let i = temp.length; i < nums.length; i++) {
//         nums[i] = 0;
//     }

//     return nums;
// }

// optimal 1
// function moveZeroes(nums) {
//     let j = -1;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] == 0) {
//             j = i;
//             break;
//         }
//     }

//     if(j == -1) return nums;

//     for (let i = j+1; i < nums.length; i++) {
//         if(nums[i] != 0) {
//             nums[j] = nums[i];
//             nums[i] = 0;
//             j++;
//         }
//     }

//     return nums;
// }

// optimal 2
// function moveZeroes(nums) {
//     let nonzero = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != 0) {
//             const temp = nums[i];
//             nums[i] = nums[nonzero];
//             nums[nonzero] = temp;
//             nonzero++;
//         }
//     }

//     return nums;
// }

// optimal 3 - fast and slow pointer approach
function moveZeroes(nums) {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != 0) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
}

console.log(moveZeroes([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
// console.log(moveZeroes([1, 1, 1]));
// console.log(moveZeroes([1, 2, 3]));
// console.log(moveZeroes([0, 0, 0]));
// console.log(moveZeroes([0, 0, 0, 0, 0, 1, 2]));
// console.log(moveZeroes([0, 0, 0, 0, 0, 1, 2, 0, 0]));