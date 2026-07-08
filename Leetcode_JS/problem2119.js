function reverse(n) {
    let rev = 0;
    while (n>0) {
        rev = rev*10+(n%10);
        n = Math.floor(n/10);
    }
    return rev;
}

function isSameAfterReversals(num) {
    let reversed2 = reverse(reverse(num));
    return reversed2 == num;
}

// Test Cases

// Single Digit Numbers
// console.log(isSameAfterReversals(0));
// console.log(isSameAfterReversals(1));
// console.log(isSameAfterReversals(7));
// console.log(isSameAfterReversals(8));


// console.log(isSameAfterReversals(10));
// console.log(isSameAfterReversals(100));
// console.log(isSameAfterReversals(1000));
// console.log(isSameAfterReversals(10000));

// console.log(isSameAfterReversals(111));
// console.log(isSameAfterReversals(999));
// console.log(isSameAfterReversals(666));
// console.log(isSameAfterReversals(101));
// console.log(isSameAfterReversals(1001));

// console.log(isSameAfterReversals(1005));

// console.log(isSameAfterReversals(123456789));   // true
// console.log(isSameAfterReversals(100000000));   // false
// console.log(isSameAfterReversals(100000001));   // true