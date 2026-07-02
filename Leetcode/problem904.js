// brute
// Time - O(n^2)
// Space - O(3)
// function totalFruits(fruits) {
//     const n = fruits.length;
//     let maximumFruits = 0;

//     for (let i = 0; i < n; i++) {
//         let k = 2;
//         let count = 0;
//         let freq = new Array(n).fill(0);
//         for (let j = i; j < n; j++) {
//             if (freq[fruits[j]] == 0 && k == 0) break;

//             if (freq[fruits[j]] == 0) k--;

//             freq[fruits[j]]++;
//             count++;
//         }

//         console.log(freq);

//         maximumFruits = Math.max(maximumFruits, count);
//     }

//     return maximumFruits;
// }

// brute - with set
// Time - O(n^2)
// Space - O(3)
// function totalFruits(fruits) {
//     const n = fruits.length;
//     let maximumFruits = 0;

//     for (let i = 0; i < n; i++) {
//         const set = new Set();
//         for (let j = i; j < n; j++) {
//             set.add(fruits[j]);

//             if (set.size <= 2)
//                 maximumFruits = Math.max(maximumFruits, j - i + 1);
//             else break;
//         }
//     }

//     return maximumFruits;
// }

// better
// Time - O(n+n) = O(2n)
// Space - O(3)
// function totalFruits(fruits) {
//     const n = fruits.length;
//     let maximumFruits = 0;
//     const hashMap = new Map();
//     let l = 0;
//     let r = 0;
//     let k = 2;

//     while (r < n) {
//         const val = (hashMap.get(fruits[r]) ?? 0) + 1;
//         hashMap.set(fruits[r], val);

//         while (hashMap.size > k) {
//             const val = (hashMap.get(fruits[l]) ?? 0) - 1;
//             if (val == 0) {
//                 hashMap.delete(fruits[l]);
//             } else {
//                 hashMap.set(fruits[l], val);
//             }
//             l++;
//         }

//         if (hashMap.size <= k) {
//             maximumFruits = Math.max(maximumFruits, r - l + 1);
//         }
//         r++;
//     }

//     return maximumFruits;
// }

// optimal
// Time - O(n)
// Space - O(3)
function totalFruits(fruits) {
    const n = fruits.length;
    let maximumFruits = 0;
    const hashMap = new Map();
    let l = 0;
    let r = 0;
    let k = 2;

    while (r < n) {
        const val = (hashMap.get(fruits[r]) ?? 0) + 1;
        hashMap.set(fruits[r], val);

        if (hashMap.size > k) {
            const val = (hashMap.get(fruits[l]) ?? 0) - 1;
            if (val == 0) {
                hashMap.delete(fruits[l]);
            } else {
                hashMap.set(fruits[l], val);
            }
            l++;
        }

        if (hashMap.size <= k) {
            maximumFruits = Math.max(maximumFruits, r - l + 1);
        }
        r++;
    }

    return maximumFruits;
}

// Test Cases
// console.log(totalFruits([0, 0, 1, 2, 2]));
// console.log(totalFruits([1, 2, 3, 2, 2]));
// console.log(totalFruits([1, 2, 1, 2, 1, 2]));
// console.log(totalFruits([1, 2, 2, 2, 1]));
// console.log(totalFruits([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
// console.log(totalFruits([1, 0, 1, 4, 1, 4, 1, 2, 3]));
// console.log(totalFruits([7, 7, 8, 8, 7, 7, 8]));
// console.log(totalFruits([1, 2, 3, 1, 2, 3]));
// console.log(totalFruits([0, 1, 6, 6, 4, 4, 6]));
