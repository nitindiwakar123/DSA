function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function countPrimes(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if(isPrime(i)) count++;
    }
    return count;
}

// Solution is very slow solution even leetcode rejecting with time limit exceed error

// Test Cases
// console.log(countPrimes(0));
// console.log(countPrimes(1));
// console.log(countPrimes(2));
// console.log(countPrimes(3));
// console.log(countPrimes(5));
// console.log(countPrimes(6));
// console.log(countPrimes(9));
// console.log(countPrimes(10));


// console.log(countPrimes(100));
// console.log(countPrimes(200));
