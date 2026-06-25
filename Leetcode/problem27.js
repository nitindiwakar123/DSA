function removeElement(nums, val) {
    if(nums.length == 1) {
        return 1;
    }
    let i = 0;
    for (let j = i+1; j<nums.length; j++) {
        if(nums[i] == val && nums[j] != val) {
            nums[i] = nums[j];
            nums[j] = val;
            i++;
        } else if(nums[i] != val) 
            i++;
    }

    return i;
}

// Test Cases
// console.log(removeElement([3,2,2,3], 3));
// console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log(removeElement([2], 3));
