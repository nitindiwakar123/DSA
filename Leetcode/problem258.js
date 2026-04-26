// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

function addDigit(num) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

// Test Cases

// Basic
// console.log(addDigit(4432)); //4

// Edge Cases 
// console.log(addDigit(0)); // 0
// console.log(addDigit(1)); // 1
// console.log(addDigit(9)); // 9

// Random
// console.log(addDigit(5463)); // 9
// console.log(addDigit(785)); // 2
// console.log(addDigit(4456)); // 1

// Same Numbers
// console.log(addDigit(111)); // 3
// console.log(addDigit(222)); // 6
// console.log(addDigit(333)); // 9
// console.log(addDigit(999)); // 9

// Containing Zeros
// console.log(addDigit(10011)); // 3
// console.log(addDigit(20000)); // 2
// console.log(addDigit(4000)); // 4
// console.log(addDigit(6000)); // 4
// console.log(addDigit(1000)); // 1

// console.log(addDigit(90009)); // 9
// console.log(addDigit(9999)); // 9
// console.log(addDigit(998)); // 8
// console.log(addDigit(949)); // 4
// console.log(addDigit(799)); // 9


// Patterns
// if n have only one non zero digit then the result is always non zero digit

