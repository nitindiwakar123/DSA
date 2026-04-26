function isThreeDivisors(n) {
    let i = 1;
    let divisorsCount = 0;

    while (i<=n) {
        if(n%i==0) divisorsCount++;
        i++;
    }

    return divisorsCount == 3;
}

// Test/Edge cases
// console.log(isThreeDivisors(0));  // false
// console.log(isThreeDivisors(1));  // false
// console.log(isThreeDivisors(2));  // false

// Small numbers
// console.log(isThreeDivisors(3));  // false
// console.log(isThreeDivisors(4));  // true   (2^2 → divisors: 1,2,4)
// console.log(isThreeDivisors(5));  // false
// console.log(isThreeDivisors(6));  // false
// console.log(isThreeDivisors(7));  // false
// console.log(isThreeDivisors(8));  // false
// console.log(isThreeDivisors(9));  // true   (3^2 → 1,3,9)
// console.log(isThreeDivisors(10)); // false

// More valid cases (perfect squares of primes)
// console.log(isThreeDivisors(25));  // true  (5^2)
// console.log(isThreeDivisors(49));  // true  (7^2)
// console.log(isThreeDivisors(121)); // true  (11^2)

// Invalid squares (not prime squares)
// console.log(isThreeDivisors(16)); // false (4^2, 4 not prime)
// console.log(isThreeDivisors(36)); // false (6^2)
// console.log(isThreeDivisors(100)); // false (10^2)

// Random numbers
// console.log(isThreeDivisors(27)); // false
// console.log(isThreeDivisors(50)); // false
// console.log(isThreeDivisors(81)); // false (9^2, 9 not prime)

// Large valid cases
// console.log(isThreeDivisors(169));  // true  (13^2)
// console.log(isThreeDivisors(289));  // true  (17^2)

// Large invalid cases
// console.log(isThreeDivisors(200));  // false
// console.log(isThreeDivisors(1000)); // false