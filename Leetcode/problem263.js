function isUglyNumber(n) {
    if(n<1) return false;
    let factor = 2;
    while (factor<=5) {
        if(n%factor == 0) {
            n /= factor;
        } else {
            factor++;
        }
    }
    console.log(n);
        
    return n===1;
}

// Test Cases
// console.log(isUglyNumber(-1));
// console.log(isUglyNumber(0));
// console.log(isUglyNumber(1));
// console.log(isUglyNumber(2));
// console.log(isUglyNumber(3));
// console.log(isUglyNumber(7));
// console.log(isUglyNumber(8));
// console.log(isUglyNumber(16));
// console.log(isUglyNumber(11));
// console.log(isUglyNumber(14));
// console.log(isUglyNumber(60));

// console.log(isUglyNumber(2147483648));
// console.log(isUglyNumber(-2147483648));
