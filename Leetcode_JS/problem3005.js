// brute
// time - O(3n)
// space - O(max)
function maxFrequencyElements(nums) {
    let max = 0;
    for (const n of nums) {
        if (n > max)
            max = n;
    }

    const freq = new Array(max).fill(0);
    let maxFreq = 0;

    for (const n of nums) {
        freq[n - 1]++;

        if (freq[n - 1] > maxFreq)
            maxFreq = freq[n - 1];
    }

    let totalMax = 0;
    for (let i = 1; i <= freq.length; i++) {
        if(freq[i-1] == maxFreq)
            totalMax += maxFreq;
    }

    
    return totalMax;
}


// optimal
// time - O(2n)
// space - O(100)
function maxFrequencyElements(nums) {
    const freq = new Array(100).fill(0);
    let maxFreq = 0;

    for (const n of nums) {
        freq[n - 1]++;


        if (freq[n - 1] > maxFreq)
            maxFreq = freq[n - 1];
    }

    let totalMax = 0;
    for (let i = 1; i <= freq.length; i++) {
        if(freq[i-1] == maxFreq)
            totalMax += maxFreq;
    }
    
    return totalMax;
}

// Test Cases
// console.log(maxFrequencyElements([15])); // 1
// console.log(maxFrequencyElements([1,2,2,3,1,4])); // 4
// // 1 -> 2 times, 2 -> 2 times (max frequency = 2)
// // Answer = 2 + 2 = 4

// console.log(maxFrequencyElements([1,2,3,4,5])); // 5
// // Every element appears once.

// console.log(maxFrequencyElements([5,5,5,5])); // 4
// // Only one element appears 4 times.

// console.log(maxFrequencyElements([1,1,2,2,3,3])); // 6
// // Three elements have frequency 2.

// console.log(maxFrequencyElements([1])); // 1

// console.log(maxFrequencyElements([7,7])); // 2

// console.log(maxFrequencyElements([1,2,2,3,3,4,4])); // 6
// // 2,3,4 each appear twice.

// console.log(maxFrequencyElements([10,20,20,30,30,30])); // 3
// // Only 30 has maximum frequency (3).

// console.log(maxFrequencyElements([1,1,1,2,2,2,3,3])); // 6
// // 1 and 2 both appear 3 times.

// console.log(maxFrequencyElements([9,8,7,6,5,4,3,2,1])); // 9
// // All unique.

// console.log(maxFrequencyElements([2,2,3,3,4,4,5,5])); // 8
// // Four elements have frequency 2.

// console.log(maxFrequencyElements([100,100,200,200,300,400,500])); // 4
// // 100 and 200 appear twice.

// console.log(maxFrequencyElements([1,1,2,3,4,5,6])); // 2
// // Only 1 has maximum frequency.

// console.log(maxFrequencyElements([8,8,8,7,7,7,6,6,6])); // 9
// // Three elements each appear 3 times.

// console.log(maxFrequencyElements([1,2,2,3,3,3,4,4,4])); // 6
// // 3 and 4 each appear 3 times.

// console.log(maxFrequencyElements([5,4,3,2,1,5,4,3,2,1])); // 10
// // Five elements each appear twice.

// console.log(maxFrequencyElements([1,1,1,1,2,2,3,3,3,3])); // 8
// // 1 and 3 each appear 4 times.

// console.log(maxFrequencyElements([99999])); // 1

// console.log(maxFrequencyElements([1,1,2,2,2,3,3,3,4,4,4])); // 9
// // 2, 3, and 4 each appear 3 times.
