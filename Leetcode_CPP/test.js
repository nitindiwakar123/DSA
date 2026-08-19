function rotatebyk(nums, k) {
    const n = nums.length;
    const ans = new Array(n).fill(-1);

    for (let i = 0; i < n-k; i++)
    {
        ans[i+k] = nums[i];
    }

    for(let i = 0; i < k;i++) {
        ans[i] = nums[(n-k)+i];
    }
    
    return ans;
}

rotatebyk([1, 2, 3, 4, 5, 6, 7], 3);