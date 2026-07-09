
// using hash array
// time - O(3n)
// space - O(max)
// still faster than hashmap approach due to hashmaps are slower than hash arrays
function findLonely(nums) {
    let max = 0;
    const ans = [];

    for (const n of nums) {
        if (n > max) {
            max = n;
        }
    }

    const freq = new Array(max + 1).fill(0);

    for (const n of nums) {
        freq[n]++;
    }

    for (let i = 0; i < freq.length; i++) {
        if(freq[i] == 1 && (!freq[i+1] || freq[i+1] == 0) && (!freq[i-1] || freq[i-1] == 0)) {
            ans.push(i);
        }
    }

    return ans;
}

// using hashmap
// time - O(2n)
// space - O(n)
function findLonely(nums) {
    const hashmap = new Map();
    const ans = [];

    for (const n of nums) {
        const val = (hashmap.get(n) ?? 0) + 1;
        hashmap.set(n, val);
    }

    for (const key of hashmap.keys()) {        
        if (hashmap.get(key) == 1 && !hashmap.get(key + 1) && !hashmap.get(key - 1)) {
            ans.push(key);
        }
    }

    return ans;
}

// Test Cases
// console.log(findLonely([10, 6, 5, 8]));
// [10,8]
// // 10 appears once and neither 9 nor 11 exist.
// // 8 appears once and neither 7 nor 9 exist.

// console.log(findLonely([1,3,5,3]));
// // [1,5]

// console.log(findLonely([1]));
// // [1]

// console.log(findLonely([2,2]));
// // []

// console.log(findLonely([1,2,3]));
// // []

// console.log(findLonely([1,3]));
// // [1,3]

// console.log(findLonely([0,2,4,6]));
// // [0,2,4,6]

// console.log(findLonely([5,5,6]));
// // []

// console.log(findLonely([5,7,7]));
// // [5]

// console.log(findLonely([1000000]));
// // [1000000]

// console.log(findLonely([999999,1000000]));
// // []

// console.log(findLonely([4,6,8,10,12]));
// // [4,6,8,10,12]

// console.log(findLonely([4,5,6,8]));
// // [8]

// console.log(findLonely([9,11,10]));
// // []

// console.log(findLonely([1,1,3,5,5,7]));
// // [3,7]

// console.log(findLonely([2,4,4,6,8,8,10]));
// // [2,6,10]

// console.log(findLonely([7,9,11,13,15]));
// // [7,9,11,13,15]