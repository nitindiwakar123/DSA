//brute(TLE)
// function containsNearbyDuplicate(nums, k) {
//     const n = nums.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (nums[i] == nums[j] && Math.abs(i - j) <= k)
//                 return true;
//         }
//     }
//     return false;
// } 

// better
// time - O(n)
// space - O(n)
// function containsNearbyDuplicate(nums, k) {
//     const hashmap = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         let val = hashmap.get(nums[i]);

//         if (val >= 0 && Math.abs(val - i) <= k)
//             return true;

//         val = i;
//         hashmap.set(nums[i], val);
//     }
//     return false;
// }

// optimal
// time - O(n)
// space - O(k)
function containsNearbyDuplicate(nums, k) {
    const seen = new Set();
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (right > left + k) {
            seen.delete(nums[left]);
            left++;
        }

        if (seen.has(nums[right]))
            return true;

        seen.add(nums[right]);
    }
    
    return false;
}

// console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true

// console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true

// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false

// console.log(containsNearbyDuplicate([1], 1)); // false

// console.log(containsNearbyDuplicate([1,1], 1)); // true

// console.log(containsNearbyDuplicate([1,1], 0)); // false

// console.log(containsNearbyDuplicate([1,2,1], 2)); // true

// console.log(containsNearbyDuplicate([1,2,1], 1)); // false

// console.log(containsNearbyDuplicate([99,99], 5)); // true

// console.log(containsNearbyDuplicate([1,2,3,4,5], 3)); // false

// console.log(containsNearbyDuplicate([1,2,3,4,1], 4)); // true

// console.log(containsNearbyDuplicate([1,2,3,4,1], 3)); // false

// console.log(containsNearbyDuplicate([-1,-2,-3,-1], 3)); // true

// console.log(containsNearbyDuplicate([-1,-2,-3,-1], 2)); // false

// console.log(containsNearbyDuplicate([5,5,5,5], 1)); // true

// console.log(containsNearbyDuplicate([5,5,5,5], 0)); // false

// console.log(containsNearbyDuplicate([1,2,3,4,5,1], 5)); // true

// console.log(containsNearbyDuplicate([1,2,3,4,5,1], 4)); // false

// console.log(containsNearbyDuplicate([1,2,2,3,4], 1)); // true

// console.log(containsNearbyDuplicate([1,2,3,2,1], 2)); // false

// console.log(containsNearbyDuplicate([1,2,3,2,1], 3)); // true

// console.log(containsNearbyDuplicate([10,20,30,40,50,10], 10)); // true

// console.log(containsNearbyDuplicate([10,20,30,40,50,10], 4)); // false

// console.log(containsNearbyDuplicate([7,8,9,7,8,9], 3)); // true

// console.log(containsNearbyDuplicate([7,8,9,7,8,9], 2)); // false