// Subtract the Product and Sum of Digits of an Integer

function getSubtract(n) {
    let product = 1;
    let sum = 0;
    while (n>0) {
        product *= n%10;
        sum += n%10;
        n = Math.floor(n/10);
    }

    return product-sum;
}

// Test Cases

// Basic
// console.log(getSubtract(234));

// Edge Cases
// console.log(getSubtract(0)); //1
// console.log(getSubtract(1)); //0
// console.log(getSubtract(9)); //0

// Number Containing 0;
// console.log(getSubtract(10));   // -1   (0 - (1+0))
// console.log(getSubtract(101));  // -2   (0 - 2)
// console.log(getSubtract(105));  // -6   (0 - 6)
// console.log(getSubtract(1000)); // -1
// console.log(getSubtract(12032)); // -8

// Prime Numbers
// console.log(getSubtract(57)); //23
// console.log(getSubtract(11)); // -1
// console.log(getSubtract(1127)); //3

// Same Numbers
// console.log(getSubtract(1)); // 0 
// // console.log(getSubtract(11)); // -1
// console.log(getSubtract(111)); // -2
// console.log(getSubtract(1111)); // -3
// console.log(getSubtract(222)); // 2   (8 - 6)
// console.log(getSubtract(999)); // 702 (729 - 27)

// Squares
// console.log(getSubtract(2468)); //364
