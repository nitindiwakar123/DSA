// 78. Subsets

// brute
function getSubsets(i, temp, nums, list) {
    if (i == nums.length) {
        list.push([...temp]);
        return list;
    }

    temp.push(nums[i]);
    getSubsets(i + 1, temp, nums, list);
    temp.pop();
    getSubsets(i + 1, temp, nums, list);

    return list;
}

// optimal
function getSubsets(idx, temp, nums, list) {
    list.push([...temp]);

    for (let i = idx; i < nums.length; i++) {
        temp.push(nums[i]);
        getSubsets(i + 1, temp, nums, list);
        temp.pop();
    }

    return list;
}

// const nums = [1, 2, 3];
// const nums = [0];
// const nums = [1,2];
// const nums = [];
const nums = [-1,0,1];
// const nums = [-1,-2];
console.log(getSubsets(0, [], nums, []));
