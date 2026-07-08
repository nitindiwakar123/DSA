function hammingWeight(n) {
    let count = 0;
    while (n>0) {
        if(n%2==1) count++;
        n = Math.floor(n/2);
    }

    return count;
}

// Test Cases
// console.log(hammingWeight(0));
// console.log(hammingWeight(1));
// console.log(hammingWeight(11));
// console.log(hammingWeight(5));
// console.log(hammingWeight(7));

// Power of 2s
// console.log(hammingWeight(2));
// console.log(hammingWeight(4));
// console.log(hammingWeight(8));
// console.log(hammingWeight(16));
// console.log(hammingWeight(32));
// console.log(hammingWeight(64));
// console.log(hammingWeight(128));
// console.log(hammingWeight(256));

//Pattern - Power of 2s always have 1 set bit

// Even Numbers
// console.log(hammingWeight(6));
// console.log(hammingWeight(10));
// console.log(hammingWeight(14));
// console.log(hammingWeight(18));
// console.log(hammingWeight(22));

// Odd Numbers
// console.log(hammingWeight(3));
// console.log(hammingWeight(5));
// console.log(hammingWeight(7));
// console.log(hammingWeight(9));
// console.log(hammingWeight(11));
// console.log(hammingWeight(13));
// console.log(hammingWeight(29));

// Prime Numbers
// console.log(hammingWeight(2));
// console.log(hammingWeight(5));
// console.log(hammingWeight(7));
// console.log(hammingWeight(11));
// console.log(hammingWeight(13));
// console.log(hammingWeight(17));
// console.log(hammingWeight(23));

// Mixed Numbers
// console.log(hammingWeight(19));  // 3  (10011)
// console.log(hammingWeight(27));  // 4  (11011)
// console.log(hammingWeight(31));  // 5  (11111)
// console.log(hammingWeight(58));  // 4  (111010)