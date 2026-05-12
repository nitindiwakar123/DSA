function isPrime(n) {
    if (n < 2) return false;
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// WAJP to take user input and print all the prime factors of the number.
function printPrimeFactors(n) {
    let prime = 2;
    const primeFactors = []
    while (n > 1) {
        if (n % prime == 0) {
            primeFactors.push(prime);
            n = n / prime;
        }
        else prime++

    }
    console.log(primeFactors);
}

// printPrimeFactors(12);

// WAJP to take user input to get sum of all the prime factors of the number.
function getSumOfPrimeFactors(n) {
    let factor = 2;
    let sum = 0;
    while (n > 1) {
        if (n % factor == 0) {
            sum += factor;
            n = n / factor
        } else factor++
    }
    return sum;
}

// console.log(getSumOfPrimeFactors(12));
// console.log(getSumOfPrimeFactors(72));

// WAJP to take user input and print and count all the factors of the number.
function getFactors1(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
            count++;
        }
    }
    console.log("Count:", count);
}

function getFactors2(n) {
    let count = 1;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            console.log(i);
            count++;
        }
    }
    console.log(n);
    console.log("Count:", count);
}

// Most Optimized
function getFactors3(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
            count++;
            const secondFactor = n / i;
            if (secondFactor != i) {
                console.log(secondFactor);
                count++;
            }
        }
    }
    console.log("Count:", count);
}
// getFactors1(12);
// getFactors2(12);
// getFactors3(36);
