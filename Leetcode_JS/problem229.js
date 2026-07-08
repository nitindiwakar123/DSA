// brute
// time - O(n^2)
// space - O(n)
function majorityElement(nums) {
    const n = nums.length;
    const ans = new Set();
    for (let i = 0; i < n; i++) {
        if (ans.has(nums[i])) continue;
        let count = 0;
        for (let j = i; j < n; j++) {
            if (nums[i] == nums[j])
                count++;

            if (count > Math.floor(n / 3)) {
                ans.add(nums[j]);
                break;
            }
        }
    }

    return [...ans];
}

// better 
// time - O(n+n)
// space - O(n+n)
function majorityElement(nums) {
    const n = nums.length;
    const hashmap = new Map();
    const ans = [];

    for (const num of nums) {
        let val = (hashmap.get(num) ?? 0) + 1;
        hashmap.set(num, val);
    }

    for (const key of hashmap.keys()) {
        if(hashmap.get(key) > Math.floor(n/3)) {
            ans.push(key);
        }
    }

    return ans;
}

// Test Cases
// console.log(majorityElement([3, 2, 3])); // [3]

// console.log(majorityElement([1])); // [1]

// console.log(majorityElement([1, 2])); // [1,2]

// console.log(majorityElement([1,2,3])); // []

// console.log(majorityElement([2,2])); // [2]

// console.log(majorityElement([1,1,1, 2, 2, 2, 3, 3, 3, 2, 3])); // [1]

// console.log(majorityElement([1,1,2,2,3,3])); // []

// console.log(majorityElement([1,1,1,2,2,2,3])); // [1,2]

// console.log(majorityElement([1,2,3,1,2,1,2])); // [1,2]

// console.log(majorityElement([4,4,4,4,2,2,3])); // [4]

// console.log(majorityElement([1,2,2,3,2,1,1,3])); // [1,2]

// console.log(majorityElement([0,0,0,1,2,3])); // [0]

// console.log(majorityElement([-1,-1,-1,2,3])); // [-1]

// console.log(majorityElement([-1,-1,2,2,2])); // [2]

// console.log(majorityElement([-1,-1,-1,2,2,2])); // [-1,2]

// console.log(majorityElement([5,5,5,5,5])); // [5]

// console.log(majorityElement([1,2,3,4,5,6])); // []

// console.log(majorityElement([2,1,1,3,1,4,5,6,1])); // [1]

// console.log(majorityElement([2,2,9,3,9,3,9,3,9,3,9,3,9])); // [3,9]

// console.log(majorityElement([1,2,1,2,1,2,3,4])); // [1,2]