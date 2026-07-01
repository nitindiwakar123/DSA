// brute
// time - O(n^2)
// space - O(1)
function numSubarrayProductLessThanK(nums, k) {
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
            if (product >= k) break;

            product = product * nums[j];
            if (product < k) count++;
        }
    }

    return count;
}

// Test Cases
// console.log(numSubarrayProductLessThanK([10,5,2,6], 100));
// console.log(numSubarrayProductLessThanK([1,2,3], 0));
// console.log(numSubarrayProductLessThanK([1,2,3], 1));
// console.log(numSubarrayProductLessThanK([1], 2));
// console.log(numSubarrayProductLessThanK([5], 5));
// console.log(numSubarrayProductLessThanK([5], 6));
// console.log(numSubarrayProductLessThanK([1,1,1], 2));
// console.log(numSubarrayProductLessThanK([2,2,2], 8));
// console.log(numSubarrayProductLessThanK([100,200], 50));
// console.log(numSubarrayProductLessThanK([1,1,1,1], 100));
// console.log(numSubarrayProductLessThanK([10,9,10], 100));
