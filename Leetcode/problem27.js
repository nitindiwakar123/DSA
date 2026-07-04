function removeElement(nums, val) {
    const n = nums.length;
    let left = 0;
    let right = 0;

    while (right < n) {
        if (nums[left] == val && nums[right] != val) {
            nums[left] = nums[right];
            nums[right] = val;
            left++;
        } else if (nums[left] != val) left++;

        right++;
    }

    return left;
}

// Test Cases
// console.log(removeElement([3,2,2,3], 3));
// console.log(removeElement([0,1,2,2,3,0,4,2], 2));
// console.log(removeElement([2], 3));
// console.log(removeElement([1], 1));

// console.log(removeElement([3, 2, 2, 3], 3)); // 2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
// console.log(removeElement([1], 1)); // 0
// console.log(removeElement([1], 2)); // 1
// console.log(removeElement([2, 2, 2], 2)); // 0
// console.log(removeElement([1, 3, 5], 2)); // 3
// console.log(removeElement([2, 1], 2)); // 1
// console.log(removeElement([1, 2], 2)); // 1
// console.log(removeElement([2, 2, 1], 2)); // 1
// console.log(removeElement([1, 2, 2, 2, 3], 2)); // 2
// console.log(removeElement([2, 1, 2, 3, 2], 2)); // 2
// console.log(removeElement([4, 5, 4, 6, 4, 7], 4)); // 3
// console.log(removeElement([1, 1, 1, 2, 2, 3], 1)); // 3
// console.log(removeElement([5, 5, 5, 5], 6)); // 4
// console.log(removeElement([1, 1, 1, 1], 6)); // 4
// console.log(removeElement([7, 8, 9], 8)); // 2

// Edge Cases
// console.log(removeElement([], 1)); // 0
// console.log(removeElement([5, 5, 5, 5], 5)); // 0
// console.log(removeElement([1, 2, 3, 4], 9)); // 4
// console.log(removeElement([2, 1, 2, 1, 2, 1], 2)); // 3
// console.log(removeElement([2, 2, 3, 4, 5], 2)); // 3
// console.log(removeElement([1, 2, 3, 4, 4], 4)); // 3
// console.log(removeElement([1, 2, 2, 2, 2, 3], 2)); // 2
// console.log(removeElement([100, 100, 200, 300, 100], 100)); // 2
