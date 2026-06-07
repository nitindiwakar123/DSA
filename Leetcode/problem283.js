// 283. Move Zeroes

// brute force
function moveZeroes(nums) {
    const temp = [];
    for (const n of nums) {
        if(n != 0) 
            temp.push(n);
    }

    for (let i = 0; i < nums.length; i++) {
        
        if(temp[i] == undefined) {
            nums[i] = 0;
        } else {
            nums[i] = temp[i];
        }

    }
    
    return nums;
}

// Test Cases
// console.log(moveZeroes([0]));
// console.log(moveZeroes([-41, 0, -66, 0, -78, 0, 79, 78]));
// console.log(moveZeroes([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
// console.log(moveZeroes([1, 1, 1]));
// console.log(moveZeroes([0, 0, 0]));
// console.log(moveZeroes([0, 0, 0, 0, 0, 1, 2]));
// console.log(moveZeroes([0, 0, 0, 0, 0, 1, 2, 0, 0]));