function sumAndMultiply(n) {
    let mul = 1;
    let x = 0;
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        
        if (digit != 0) {
            x = digit * mul + x; 
            sum += digit;
            mul *= 10;
        };
        n = Math.floor(n/10);
    }

    return x*sum;
}

// Test Cases
// console.log(sumAndMultiply(0));
// console.log(sumAndMultiply(1));
// console.log(sumAndMultiply(9));
// console.log(sumAndMultiply(10));
// console.log(sumAndMultiply(100));

// Trailing Zeroes
console.log(sumAndMultiply(10203004));