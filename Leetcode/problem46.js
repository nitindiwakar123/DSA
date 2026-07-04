// 46. Permutations

// Time - O(n!*n)
// Space - O(2n)
function backtrack(nums, temp, freq, list) {
    if (temp.length == nums.length) {
        list.push([...temp]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (freq[i]) continue;

        temp.push(nums[i]);
        freq[i] = true;
        backtrack(nums, temp, freq, list);
        temp.pop();
        freq[i] = false;
    }
}

// optimal
// Time - O(n!*n)
// Space - O(n)
// function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function backtrack(idx, ds, nums, list) {

//     if (idx == nums.length - 1) {
//         list.push([...ds]);
//         return;
//     } // base condition

//     let j = idx;
//     while (j < nums.length) {
//         swap(ds, idx, j); // swap
//         backtrack(idx + 1, ds, nums, list);
//         swap(ds, idx, j); // unswap
//         j++;
//     }
// }


const nums = [1, 2, 3];
// const nums = [0,1];
// const nums = [1];
const list = [];
const freq = new Array(nums.length).fill(false);
backtrack(nums, [], freq, list);
// backtrack(0, [...nums], nums, list);
console.log(list);
