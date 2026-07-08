function getCombinationsCount(i, nums, target) {
    if (i >= nums.length || target <= 0) {
        if (target == 0) {
            return 1;
        }
        return 0;
    }

    const l = getCombinationsCount(i, nums, target - nums[i]);

    const r = getCombinationsCount(i + 1, nums, target);

    return l + r;
}