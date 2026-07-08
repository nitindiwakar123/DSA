// 1748. Sum of Unique Elements

// optimal

// using hash array
function sumOfUnique(nums) {

    let max = 0;
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
    }

    const freq = new Array(max + 1).fill(0);
    let sum = 0;

    for (const num of nums) {
        freq[num]++;
    }

    for (let i = 0; i < freq.length; i++) {
        if(freq[i] == 1) {
            sum += i;
        }
    }

    return sum;
}


// using map
// function sumOfUnique(nums) {

//     let sum = 0;
//     const hashmap = new Map();

//     for (const num of nums) {
//         const val = (hashmap.get(num) ?? 0) + 1;
//         hashmap.set(num, val);
//     }

//     for (const key of hashmap.keys()) {
//         const freq = hashmap.get(key);

//         if(freq == 1) {
//             sum += key;
//         }
//     }
//     return sum;
// }

// Test Cases
// console.log(sumOfUnique([1,2,3,2])); // 4
// // Unique: 1,3

// console.log(sumOfUnique([1,1,1,1,1])); // 0
// // No unique elements

// console.log(sumOfUnique([1, 2, 3, 4, 5])); // 15
// // All elements are unique

// console.log(sumOfUnique([5])); // 5
//  // Single element

// console.log(sumOfUnique([10, 10])); // 0
// Duplicate pair

// console.log(sumOfUnique([1,2,2,3,3,4])); // 5
// // Unique: 1,4

// console.log(sumOfUnique([2,2,3,4,4,5])); // 8
// Unique: 3,5

// console.log(sumOfUnique([7,8,9,7,8,10])); // 19
// // Unique: 9,10

// console.log(sumOfUnique([100])); // 100

// console.log(sumOfUnique([1,1,2,2,3,3])); // 0

// console.log(sumOfUnique([1,2,3,4,1,2,3,4,5])); // 5
// // Only 5 is unique

// console.log(sumOfUnique([9,8,7,6,5,4,3,2,1])); // 45
// // All unique

// console.log(sumOfUnique([4,4,5,6,6,7,8,8])); // 12
// // Unique: 5,7

// console.log(sumOfUnique([1,2,2,3,4,4,5,6,6])); // 9
// // Unique: 1,3,5

// console.log(sumOfUnique([1,1,2,3,4,5])); // 14
// // Unique: 2,3,4,5

// console.log(sumOfUnique([3,3,3,2,2,1])); // 1

// console.log(sumOfUnique([1,2,1,2,3,4])); // 7
// // Unique: 3,4

// console.log(sumOfUnique([50,75,50,100,25])); // 200
// // Unique: 75,100,25

// console.log(sumOfUnique([1,2,3,2,1,4,5])); // 12
// // Unique: 3,4,5

// console.log(sumOfUnique([1,2,3,4,5,1,2,3,4,5])); // 0
// // Every element appears twice