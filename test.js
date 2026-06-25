function minLenSubArray(nums, target) {
    let minLength = nums.length + 1;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j >= 0; j--) {
            sum += nums[j];

            if (sum >= target) {
                minLength = Math.min(minLength, i - j + 1);
                if (minLength == 1) return 1;
            }
        }
    }

    return minLength == nums.length + 1 ? 0 : minLength;
}

// console.log(minLenSubArray([2,3,1,2,4,3], 7));
// console.log(minLenSubArray([1,1,1,1,1,1,1,1], 11));
console.log(minLenSubArray([1,2,3,4,5], 11));
