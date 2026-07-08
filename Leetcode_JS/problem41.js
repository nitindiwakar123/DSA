// brute - with hashing
function firstMissingPositive(nums) {
    const size = nums.length;
    const temps = new Array(size).fill(0);

    for (const n of nums) {
        if (n > 0 && n <= size)
            temps[n - 1] = 1;
    }

    for (let i = 0; i < temps.length; i++) {
        if (temps[i] == 0)
            return i + 1;
    }

    return size + 1;
}

function firstMissingPositive(nums) {
    const size = nums.length;

    for (let i = 0; i < size; i++) {
        while (nums[i]>0 && nums[i]<=size && nums[i] )  {
            
        }
    }

    return size + 1;
}

// console.log(firstMissingPositive([-3, 0, 1, 2, 3, 7, 6]));
// firstMissingPositive([-3, 7, 8, 2, 1, 5, -7, 8]);