function getSubsetSums(i, sum, nums, list) {
    if (i >= nums.length) {
        list.push(sum);
        return list;
    }

    getSubsetSums(i + 1, sum + nums[i], nums, list);
    getSubsetSums(i + 1, sum, nums, list);

    return list;
}

const nums = [3, 1, 2];
const list = getSubsetSums(0, 0, nums, []);
list.sort((a, b) => a - b);
console.log(list);

