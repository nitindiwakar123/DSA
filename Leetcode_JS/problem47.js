// recursive approach with hashing
// Time - O(n!*n)
// Space - O(2n)
// function backtrack(nums, temp, freq, list) {
//     if (temp.length == nums.length) {
//         list.push([...temp]);
//         return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == nums[i - 1] && !freq[i - 1]) continue;
//         if (freq[i]) continue;

//         temp.push(nums[i]);
//         freq[i] = true;
//         backtrack(nums, temp, freq, list);
//         temp.pop();
//         freq[i] = false;
//     }
// }


// recursive approach with swaping method
// Time - O(n!*n)
// Space - O(2n)
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function backtrack(idx, ds, nums, list) {

    if (idx == nums.length) {
        list.push([...ds]);
        return;
    } // base condition

    const seen = new Set();
    for (let i = idx; i < nums.length; i++) {
        if (seen.has(ds[i])) continue;

        seen.add(ds[i]);
        swap(ds, idx, i); // swap
        backtrack(idx + 1, ds, nums, list);
        swap(ds, idx, i); // unswap
    }
}

// const nums = [1, 2, 3];
// const nums = [1, 1, 2];
// const nums = [1, 1, 2, 2];
// const nums = [-1, -1, 2];
// const nums = [1];
// const nums = [1, 1];
// const nums = [2,2,1,1];
// const nums = [0,1,0,0,9];
// const nums = [3, 3, 0, 3];
// const freq = new Array(nums.length).fill(false);
// backtrack(nums, [], freq, list);
nums.sort((a, b) => a - b);
const list = [];
backtrack(0, [...nums], nums, list);
console.log(list);