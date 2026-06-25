function getMaxSum(i, sum, maxSum, nums) {
    if (i >= nums.length) {
        return maxSum;
    }
    if(maxSum < sum+nums[i]) {
        maxSum = sum+nums[i];
    }
    maxSum = getMaxSum(i+1, sum+nums[i], maxSum, nums);
    maxSum = getMaxSum(i+1, nums[i], maxSum, nums);
    
    return maxSum;
}

// Test Cases
// console.log(getMaxSum(0, 0, 0, [-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(getMaxSum(0, 0, 0, [1]));
// console.log(getMaxSum(0, 0, 0, [1]));
// console.log(getMaxSum(0, 0, -1, [-1]));
console.log(getMaxSum(0, 0, -5, [-5,-4,-3,-2]));