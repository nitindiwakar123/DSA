// brute
// time - O(n)+O(n)+O(n) = O(3n)
// space - O(max+1)
// function mostFrequentEven(nums) {
//     let max = 0;
//     for (const num of nums) {
//         if (num > max)
//             max = num;
//     }
//     const freq = new Array(max + 1).fill(0);

//     for (const num of nums) {
//         if (num % 2 == 0) {
//             freq[num]++;
//         }
//     }

//     let highestFreq = 0;
//     let mostFrequent = -1;
//     for (let i = 0; i<freq.length; i++) {

//         if(freq[i] > highestFreq) {
//             highestFreq = freq[i];
//             mostFrequent = i;
//         }
//     }

//     return mostFrequent;
// }

// better
// time - O(n)+O(n) = O(2n)
// space - O(max+1)
// function mostFrequentEven(nums) {
//     let max = 0;
//     for (const num of nums) {
//         if (num > max)
//             max = num;
//     }

//     const freq = new Array(max + 1).fill(0);
//     let highestFreq = 0;
//     let mostFrequent = -1;

//     for (const num of nums) {
//         if (num % 2 == 0) {
//             freq[num]++;

//             if (freq[num] > highestFreq || (freq[num] == highestFreq && num < mostFrequent)) {
//                 highestFreq = freq[num];
//                 mostFrequent = num;
//             }
//         }
//     }

//     return mostFrequent;
// }

// optimal
// time - O(n)
// space - O(n)
function mostFrequentEven(nums) {

    const hashmap = new Map();
    let highestFreq = 0;
    let mostFrequent = -1;

    for (const num of nums) {
        if (num % 2 == 0) {
            const freq = (hashmap.get(num) ?? 0) + 1;
            hashmap.set(num, freq);
            if (freq > highestFreq || (freq == highestFreq && num < mostFrequent)) {
                highestFreq = freq;
                mostFrequent = num;
            }
        }
    }

    return mostFrequent;
}

// Test Cases
// console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
// console.log(mostFrequentEven([0,1,2,2,4,4,1])); // 2
// 2 and 4 appear twice, return smaller = 2

// console.log(mostFrequentEven([4,4,4,9,2,4])); // 4
// // 4 appears 4 times

// console.log(mostFrequentEven([29,47,21,41,13,37,25,7])); // -1
// // No even numbers

// console.log(mostFrequentEven([2])); // 2
// // Single even

// console.log(mostFrequentEven([3])); // -1
// // Single odd

// console.log(mostFrequentEven([2,4,6,8])); // 2
// // All even, same frequency

// console.log(mostFrequentEven([8,6,4,2])); // 2
// // Same frequency, smallest even wins

// console.log(mostFrequentEven([10,10,2,2,2,10])); // 2
// // Tie (3 each), smaller wins

// console.log(mostFrequentEven([0,0,0,2,2])); // 0
// // 0 appears most

// console.log(mostFrequentEven([0,2,4,6,8,10])); // 0
// // All frequency 1

// console.log(mostFrequentEven([5,5,6,6,6,7,8,8])); // 6
// // 6 appears most

// console.log(mostFrequentEven([100000,100000,2,2])); // 2
// // Tie with large value

// console.log(mostFrequentEven([100000])); // 100000

// console.log(mostFrequentEven([99999])); // -1

// console.log(mostFrequentEven([2,2,2,2])); // 2

// console.log(mostFrequentEven([1,3,5,7,9,2])); // 2
// // Only one even

// console.log(mostFrequentEven([6,6,8,8,10,10])); // 6
// // Three-way tie

// console.log(mostFrequentEven([14,12,10,8,6,4,2,0])); // 0
// // Every even appears once

// console.log(mostFrequentEven([2,4,2,4,6,6,6])); // 6

// console.log(mostFrequentEven([0,2,0,2,4,4])); // 0
// // Three-way tie, smallest wins

// console.log(mostFrequentEven([2,2,4,4,4,6,6])); // 4

// console.log(mostFrequentEven([12,12,12,10,10,8,8,8])); // 8
// // 12 and 8 appear 3 times, smaller wins

// console.log(mostFrequentEven([0,0,2,2,4,4,6,6])); // 0
// // Four-way tie

// console.log(mostFrequentEven([1,2,3,4,5,6,7,8,9,10])); // 2
// // Every even appears once

// console.log(mostFrequentEven([20,18,16,14,12,10,8,6,4,2,0,20])); // 20
// // 20 appears twice, others once