// brute
// function get3Sum(nums) {
//     const n = nums.length;
//     const list = [];
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < n - 2; i++) {
//         if (i > 0 && nums[i] == nums[i - 1]) continue;
//         for (let j = i+1; j < n - 1; j++) {
//             if (j > i+1 && nums[j] == nums[j - 1]) continue;
//             for (let k = j+1; k < n; k++) {
//                 if (k > j+1 && nums[k] == nums[k - 1]) continue;
//                 if (nums[i] + nums[j] + nums[k] == 0) {
//                     list.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }

//     return list;
// }

// brute time complexity analysis
// time complexity O(n^3) - it will not run on leetcode but a valid solution

// optimal - two pointers(opposite ends)
function get3Sum(nums) {
    const n = nums.length;
    const list = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {

        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            }
            else if (sum > 0) {
                right--;
            }
            else {
                list.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left > i + 1 && nums[left] == nums[left - 1]) left++;
                while (right < n - 1 && nums[right] == nums[right + 1]) right--;
            }
        }
    }
    return list;
}

// Test Cases
// console.log(get3Sum([-1, 0, 1, 2, -1, -4]));
// console.log(get3Sum([1,2,3,4]));
// console.log(get3Sum([0,0,0]));
// console.log(get3Sum([0,0,0,0]));
// console.log(get3Sum([-2,0,2]));
// console.log(get3Sum([-2,0,0,2,2]));
// console.log(get3Sum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4]));
