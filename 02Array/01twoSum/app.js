function twoSum(nums, target) {
    if(!nums.length) return [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= nums.length; j++) {
            const sum = nums[i]+nums[j];
            if(sum == target) return [i, j]            
        }        
    }

    return [-1, -1];
}

// Test Cases
// const nums = [1, 1, 1];
// const target = 2;

// const nums = [4, 7, 9];
// const target = 16;

// const nums = [3, 3];
// const target = 6;

// const nums = [-1, -2, -3, -4, -5];
// const target = -8;

// const nums = [1, 2, 3, 4, 5];
// const target = 6;

const nums = [5,5,2,11];
const target = 10;

console.log(twoSum(nums, target));