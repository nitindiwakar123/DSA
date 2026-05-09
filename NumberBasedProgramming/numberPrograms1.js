// WAP to check whether a number is prime or not.

// way 1 - less optimized
// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if(n%i == 0) return false;
//     }
//     return true;
// }

// way 2 - more optimized than way 1, number of iterations = n/2
// function isPrime(n) {
//     for (let i = 2; i <= n/2; i++) {
//         if(n%i == 0) return false;
//     }
//     return true;
// }

console.log(isPrime(30));