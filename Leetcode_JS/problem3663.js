// 3663. Find The Least Frequent Digit

// time - (2n)
// space - O(n)
// n = number of digits
function findLeastFrequentDigit(n) {
    if(n==1) return 1;
    const hashMap = new Map();

    let minFreq = n;
    let ans = 0;
    while (n>0) {
        const digit = n%10;
        const val = (hashMap.get(digit) ?? 0) + 1;
        hashMap.set(digit, val);
        n = Math.floor(n/10);
    }

    for (const key of hashMap.keys()) {
        const freq = hashMap.get(key);
        
        if(freq < minFreq || (freq == minFreq && key < ans)) {
            minFreq = freq;
            ans = key;
        }
    }

    return ans;
}

// Test Cases
// console.log(getLeastFrequentDigit(91553322));
// console.log(findLeastFrequentDigit(1)); // 1
// console.log(findLeastFrequentDigit(7)); // 7
// console.log(findLeastFrequentDigit(0)); // 0

// console.log(findLeastFrequentDigit(121)); // 2
// console.log(findLeastFrequentDigit(112233)); // 1
// console.log(findLeastFrequentDigit(122333)); // 1

// console.log(findLeastFrequentDigit(123456789)); // 1
// console.log(findLeastFrequentDigit(9876543210)); // 0

// console.log(findLeastFrequentDigit(1112223334445)); // 5

// console.log(findLeastFrequentDigit(999999991)); // 1
// console.log(findLeastFrequentDigit(100000000)); // 1

// console.log(findLeastFrequentDigit(455445544)); // 5
// console.log(findLeastFrequentDigit(777788889999)); // 7


// console.log(findLeastFrequentDigit(1231231234)); // 4

// // Tie cases (return the smallest digit among least frequent)
// console.log(findLeastFrequentDigit(1221)); // 1
// console.log(findLeastFrequentDigit(1122)); // 1
// console.log(findLeastFrequentDigit(445566)); // 4

// // Large frequency differences
// console.log(findLeastFrequentDigit(1111111112)); // 2
// console.log(findLeastFrequentDigit(5555555555555550)); // 0

// // Mixed
console.log(findLeastFrequentDigit(1010101012)); // 2
console.log(findLeastFrequentDigit(9090909098)); // 8
console.log(findLeastFrequentDigit(12344445555)); // 1
console.log(findLeastFrequentDigit(555444333221)); // 1