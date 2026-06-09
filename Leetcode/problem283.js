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
function moveZeroes(nums) {
    const temp = [];
    for (const n of nums) {
        if (n != 0)
            temp.push(n);
    }

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }

    for (let i = temp.length; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

// optimal
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

// Test Cases
// console.log(moveZeroes([0]));
// console.log(moveZeroes([-41, 0, -66, 0, -78, 0, 79, 78]));

function moveZeroes(nums) {
    let j = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            j = i;
            break;
        }
    }

    if (j === -1) return nums;

    for (let i = j+1; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[j] = nums[i];
            nums[i] = 0;
            j++;
        }
    }

    return nums;
}

// console.log(moveZeroes([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
// console.log(moveZeroes([1, 1, 1]));
// console.log(moveZeroes([0, 0, 0]));
// console.log(moveZeroes([0, 0, 0, 0, 0, 1, 2]));
// console.log(moveZeroes([0, 0, 0, 0, 0, 1, 2, 0, 0]));