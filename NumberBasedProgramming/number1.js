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

printPrimeFactors(12);