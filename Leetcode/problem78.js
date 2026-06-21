// 78. Subsets

function getSubsets(i, temp, nums, list) {
    if (i >= nums.length) {
        list.push([...temp]);
        return list;
    }

    temp.push(nums[i]);
    getSubsets(i + 1, temp, nums, list);
    temp.pop();
    getSubsets(i + 1, temp, nums, list);

    return list;
}

// const nums = [1,2,3];
// const nums = [0];
// const nums = [1,2];
// const nums = [];
// const nums = [-1,0,1];
// const nums = [-1,-2];
console.log(getSubsets(0, [], nums, []));
