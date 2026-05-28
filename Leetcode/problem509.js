function getNthFibonacciTerm(n) {
    if(n==1)
        return 1;
    let a = 0;
    let b = 1;
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = a+b;
        a=b;
        b=current;
    }
    return current;
}

// function getNthFibonacciTerm(n) {
//     const g = 1.618033988749895;
//     return Math.round(((g**n)-(1-g)**n)/Math.sqrt(5));
// }


// Test Cases
// console.log(getNthFibonacciTerm(0));
// console.log(getNthFibonacciTerm(1));
// console.log(getNthFibonacciTerm(2));
// console.log(getNthFibonacciTerm(3));
// console.log(getNthFibonacciTerm(4));
// console.log(getNthFibonacciTerm(5));
// console.log(getNthFibonacciTerm(6));

console.log(getNthFibonacciTerm(19));

// console.log(getNthFibonacciTerm(1));
// console.log(getNthFibonacciTerm(11));
// console.log(getNthFibonacciTerm(111));

// console.log(getNthFibonacciTerm(2));
// console.log(getNthFibonacciTerm(3));
// console.log(getNthFibonacciTerm(5));
// console.log(getNthFibonacciTerm(7));
// console.log(getNthFibonacciTerm(11));

// console.log(getNthFibonacciTerm(20));
// console.log(getNthFibonacciTerm(30));
// console.log(getNthFibonacciTerm(6));
