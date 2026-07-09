// brute
// time - O(2n)
// space - O(max)
// function isPossibleToSplit(nums) {
//     let max = 0;

//     for (const num of nums) {
//         if (num > max) {
//             max = num;
//         }
//     }

//     const freq = new Array(max).fill(0);

//     for (const num of nums) {
//         freq[num - 1]++;

//         if (freq[num - 1] > 2)
//             return false;
//     }

//     return true;
// }

// better
// time - O(n)
// space - O(n)
function isPossibleToSplit(nums) {
    const hashmap = new Map();

    for (const num of nums) {
        const freq = (hashmap.get(num) ?? 0) + 1;

        if(freq > 2)
            return false;

        hashmap.set(num, freq);
    }

    return true;
}

// Test Cases
// console.log(isPossibleToSplit([8, 9, 8, 5, 9, 3, 3, 1, 2, 1]));
// console.log(isPossibleToSplit([1,1,2,2,3,4])); // true
// // Basic valid case.

// console.log(isPossibleToSplit([1,1,1,2])); // false
// // 1 appears 3 times.

// console.log(isPossibleToSplit([1,2,3,4])); // true
// // All unique.

// console.log(isPossibleToSplit([5,5])); // true
// // One copy goes to each array.

// console.log(isPossibleToSplit([5,5,5,5])); // false
// // Frequency is 4.

// console.log(isPossibleToSplit([1,2])); // true
// // Smallest even-sized array.

// console.log(isPossibleToSplit([7,7,8,8,9,9])); // true
// // Every element appears exactly twice.

// console.log(isPossibleToSplit([1,2,2,3,3,4])); // true
// // Mixed frequencies.

// console.log(isPossibleToSplit([10,20,30,40,50,60])); // true
// // All distinct.

// console.log(isPossibleToSplit([2,2,2,3,3,4])); // false
// // One element appears 3 times.

// console.log(isPossibleToSplit([9,9,8,8,7,7,6,6])); // true
// // Every value appears twice.

// console.log(isPossibleToSplit([1,1,2,3,4,5])); // true
// // Only one duplicate.

// console.log(isPossibleToSplit([100,100,100,101,102,103])); // false
// // Triple occurrence.

// console.log(isPossibleToSplit([1,2,3,1,2,3])); // true
// // Perfect split.

// console.log(isPossibleToSplit([4,3,2,1,4,3,2,1])); // true
// // Unsorted input.

// console.log(isPossibleToSplit([6,6,6,7,8,9])); // false
// // Triple occurrence.

// console.log(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5])); // true
// // Larger valid input.

// console.log(isPossibleToSplit([1,2,3,4,5,6,7,8])); // true
// // All unique.

// console.log(isPossibleToSplit([8,8,8,8,9,9])); // false
// // Frequency greater than 2.

// console.log(isPossibleToSplit([1,2,2,3,4,5,6,7])); // true
// // Single duplicated value.