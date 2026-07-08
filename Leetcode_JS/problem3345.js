//  Smallest Divisible Digit Product I

function getProduct(n) {
    let product = 1;
    while (n>0) {
        product *= (n%10);
        n = Math.floor(n/10);
    }
    return product;
}

function smallestNumber(n, t) {
    while (true) {
        const product = getProduct(n);
        if(product%t === 0) return n;
        n++;
    }
}

// Test Cases
// console.log(smallestNumber(1, 2));
// console.log(smallestNumber(10, 2));
// console.log(smallestNumber(15, 3));
