// brute
function removeDuplicates(nums) {
    const set = new Set(nums);
    let index = 0;
    for (const element of set) {
        nums[index] = element;
        index++;
    }
    return set.size;
}

// optimal
function removeDuplicates(nums) {
    let i = 0;
    for (let j = 1; j<nums.length; j++) {
        if(nums[j] != nums[i]) {
            nums[i+1] = nums[j];
            i++;
        }
    }

    return i+1;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3]));