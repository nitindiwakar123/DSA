// 217. Contains Duplicate

// brute(TLE)
// time - O(n^2)
// space - O(1)
// function containsDuplicate(nums) {
//     const n = nums.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i+1; j < n; j++) {
//             if (nums[i] == nums[j]) 
//                 return true;
//         }
//     }

//     return false;
// }

// better
// time - (n)
// space - O(n)
// function containsDuplicate(nums) {
//     const hashmap = new Map();

//     for (const n of nums) {
//         const val = (hashmap.get(n) ?? 0) + 1;

//         if (val > 1)
//             return true;

//         hashmap.set(n, val);
//     }
//     return false;
// }

// optimal
// time - O(n)
// space - O(n)
function containsDuplicate(nums) {
    const n = nums.length;
    const hashSet = new Set();

    for (const n of nums) {
        if(hashSet.has(n))
            return true;

        hashSet.add(n);
    }

    return false;
}


// Test Cases
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 3, 3, 4, 3, 2, 4, 2]));
