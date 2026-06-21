// 90. Subsets II

function getSubsets(idx, temp, nums, list) {
    list.push([...temp]);
    if (idx >= nums.length) {
        return list;
    }

    for (let i = idx; i < nums.length; i++) {
        if (i > idx && nums[i] == nums[i - 1]) continue;

        temp.push(nums[i]);
        getSubsets(i + 1, temp, nums, list);
        temp.pop();
    }

    return list;
}

const nums = [1,2,2];
// const nums = [0];
console.log(getSubsets(0, [], nums, []));