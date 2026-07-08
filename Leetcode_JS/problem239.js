// 239. Sliding Window Maximum

// brute
// Time - O(n^2)
// Space - O(n)
// Time limit exceed leetcode!
function maxSlidingWindow(nums, k) {
    const n = nums.length;
    const ans = [];

    for (let i = 0; i < n - k + 1; i++) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        ans.push(max);
    }

    return ans;
}

// better
function maxSlidingWindow(nums, k) {
    const ans = [];
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (right >= left + k - 1) {
            let max = Number.MIN_SAFE_INTEGER;
            for (let i = right; i >= left; i--) {
                max = Math.max(max, nums[i]);
            }
            ans.push(max);
            left++;
        }
    }

    return ans;
}

// Test Cases
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([1], 1)); 
// [1]

// console.log(maxSlidingWindow([1, 2], 1)); 
// [1, 2]

// console.log(maxSlidingWindow([1, 2], 2)); 
// // [2]

// console.log(maxSlidingWindow([2, 1], 2)); 
// // [2]

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); 
// // [3, 3, 5, 5, 6, 7]

// console.log(maxSlidingWindow([9, 8, 7, 6, 5], 2)); 
// // [9, 8, 7, 6]

// console.log(maxSlidingWindow([1, 2, 3, 4, 5], 3)); 
// // [3, 4, 5]

// console.log(maxSlidingWindow([5, 4, 3, 2, 1], 3)); 
// // [5, 4, 3]

// console.log(maxSlidingWindow([4, 4, 4, 4], 2)); 
// // // [4, 4, 4]

// console.log(maxSlidingWindow([7, 2, 4], 2)); 
// [7, 4]

// console.log(maxSlidingWindow([1, -1], 1)); 
// [1, -1]

// console.log(maxSlidingWindow([-1, -3, -5, -2, -1], 2)); 
// // [-1, -3, -2, -1]

// console.log(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4)); 
// // [7, 7, 7, 7, 7]

// console.log(maxSlidingWindow([10, 9, 8, 7, 6], 5)); 
// // [10]

// console.log(maxSlidingWindow([5, 5, 5, 5, 5], 3)); 
// [5, 5, 5]

// console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)); 
// [3, 3, 2, 5]

// console.log(maxSlidingWindow([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4)); 
// [10, 10, 10, 15, 15, 90, 90]

// console.log(maxSlidingWindow([100, 99, 98, 97, 96, 95], 4)); 
// [100, 99, 98]

// console.log(maxSlidingWindow([1, 100, 1, 100, 1], 2)); 
// [100, 100, 100, 100]

// console.log(maxSlidingWindow([0, 0, 0, 0], 2)); 
// [0, 0, 0]