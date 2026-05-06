function checkDivisibility(n) {
    let sum = 0;
    let product = 1;
    const num = n;
    while (n>0) {
        const rem = n%10;
        sum += rem;
        product *= rem;
        n = Math.floor(n/10);
    }
    return num > 0 && num % (sum+product) == 0;
}

// Test Cases

// Single Digit Numbers
// console.log(checkDivisibility(0));
// console.log(checkDivisibility(1));
// console.log(checkDivisibility(7));
// console.log(checkDivisibility(9));

// Numbers with Trailing Zeroes
// console.log(checkDivisibility(10));
// console.log(checkDivisibility(20));
// console.log(checkDivisibility(30));
// console.log(checkDivisibility(100));
// console.log(checkDivisibility(1000));

// console.log(checkDivisibility(1001));
// console.log(checkDivisibility(1004));

// Palidrome Numbers
// console.log(checkDivisibility(121));
// console.log(checkDivisibility(22));
// console.log(checkDivisibility(343));