function isUglyNumber(n) {
    if (n < 1) return false;
    let factor = 2;
    while (factor <= 5) {
        if (n % factor == 0) {
            n /= factor;
        } else {
            factor++;
        }
    }
    return n === 1;
}



// Test Cases
// console.log(nthUglyNumber(10));
// console.log(nthUglyNumber(1));
// console.log(nthUglyNumber(20));
