function firstMissingPositive(nums) {
    let j = 0;
    for (let i = 0; i<nums.length; i++) {
        if(nums[j] === i+1) {
            const temp = nums[i];
            nums[i] = 
        }
    }
}

// firstMissingPositive([-3, 0, 1, 2, 3, 7, 6]);
firstMissingPositive([-3, 7, 8, 2, 1, 5, -7, 8]);