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

function getNthFibonacciTerm(n) {
    if(n==0){
        return 0;
    } else if(n==1){
        return 1;
    }

    let n1 = 0, n2 = 1, n3 = 0;
    let i = 1;

    while (i<=n-1) {
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;
        i++;
    }
    return n3;
}

// Test Cases
// console.log(getNthFibonacciTerm(0));
// console.log(getNthFibonacciTerm(1));
// console.log(getNthFibonacciTerm(2));
// console.log(getNthFibonacciTerm(3));
// console.log(getNthFibonacciTerm(4));
// console.log(getNthFibonacciTerm(5));
// console.log(getNthFibonacciTerm(6));

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
