// Find LCM and HCF from Different Methods

// Prime Factorization - nextPrime is'nt neccessary
function primeFactorization(n) {
    const factors = [];
    let factor = 2;
    while (n > 1) {
        if (n % factor == 0) {
            factors.push(factor);
            n /= factor;
        } else {
            factor++;
        }
    }
    return factors;
}

function primeFactorizationOfTwoNumbers(a, b) {
    const factors = [];
    let factor = 2;
    while (a > 1 || b > 1) {
        if (a % factor == 0 || b % factor == 0) {
            if (a % factor == 0) {
                a = a / factor;
            }
            if (b % factor == 0) {
                b = b / factor;

            }
            factors.push(factor);
        } else {
            factor++;
        }
    }
    return factors;
}

// function getCommonFactors(aFactors, bFactors) {
//     if (!aFactors.length || !bFactors.length) return [];
//     const commonFactors = [];

//     for (let i = 0; i < aFactors.length; i++) {
//         const factor = aFactors[i];
//         // console.log({aFactors, bFactors, i, factor, "bFactors.includes[aFactors[i]]": bFactors.includes(factor), commonFactors });
//         if (bFactors.includes(factor)) {
//             commonFactors.push(factor);
//         }
//     }
//     return [...new Set(commonFactors)];
// } // small bug

// better

function getCommonFactors(aFactors, bFactors) {
    const commonFactors = [];
    const usedIndexes = [];

    for (let i = 0; i < aFactors.length; i++) {
        for (let j = 0; j < bFactors.length; j++) {
            if (aFactors[i] == bFactors[j] && !usedIndexes.includes(j)) {
                commonFactors.push(aFactors[i]);
                usedIndexes.push(j);
                break;
            }
        }
    }
    return commonFactors;
}

// Faster than brute force method
function getLCMbyPrimeFactorization(a, b) {
    if (a <= 1 || b <= 1) return 0;
    const mergedFactors = primeFactorizationOfTwoNumbers(a, b);

    let LCM = 1;
    for (let i = 0; i < mergedFactors.length; i++) {
        const factor = mergedFactors[i];
        LCM *= factor;
    }
    return LCM;
}

function getHCFbyPrimeFactorization(a, b) {
    const aFactors = primeFactorization(a);
    const bFactors = primeFactorization(b);
    const commonFactors = getCommonFactors(aFactors, bFactors);
    // console.log({ a, b, aFactors, bFactors, commonFactors });

    let HCF = 1;
    for (let i = 0; i < commonFactors.length; i++) {
        const factor = commonFactors[i];
        HCF *= factor;
    }
    return HCF;
}

function getLCMandHCFbyPrimeFactorization(a, b) {
    const LCM = getLCMbyPrimeFactorization(a, b);
    const HCF = getHCFbyPrimeFactorization(a, b);

    return { LCM, HCF };
}

// Faster than Prime Factorization and Brute Force
function getHCFbyDivision(a, b) {
    if (a <= 0 && b <= 0) {
        return undefined;
    } else if (a == 1 || b == 1) {
        return 1;
    };
    let rem = 1;
    let dividend = a >= b ? a : b;
    let divisor = a >= b ? b : a;
    while (rem > 0) {
        rem = dividend % divisor;
        dividend = divisor;
        divisor = rem;
    }
    return dividend;
}
// console.log(getLCMandHCFbyPrimeFactorization(12, 15));
// console.log(getLCMandHCFbyPrimeFactorization(435, 546));

function getLCMandLCFbyDivison(a, b) {
    const HCF = getHCFbyDivision(a, b);
    const LCM = getLCMbyPrimeFactorization(a, b);

    return { HCF, LCM };
}

function getLCMandLCFbyDivisonOfThree(a, b, c) {
    const HCF = getHCFbyDivision(getHCFbyDivision(a, b), c);
    const LCM = getLCMbyPrimeFactorization(getLCMbyPrimeFactorization(a, b), c);

    return { HCF, LCM };

}

// console.log(getLCMandLCFbyDivisonOfThree(120, 256, 478));
// console.log(getLCMandHCFbyPrimeFactorization(12, 8));

// Slower than prime factorization method
function getLCMbyBruteForceMethod(a, b, c) {
    const biggest = a > b ? (a > c ? a : c) : (b > c ? b : c);
    for (let i = biggest; ; i++) {
        // console.log({i, "i%a == 0 && i%b==0 && i%c==0)": i%a == 0 && i%b==0 && i%c==0});

        if (i % a == 0 && i % b == 0 && i % c == 0) {
            return i;
        }
    }
}

// Slower than prime factorization method(in some larger cases) & but absoulutly slower than HCF division method
function getHCFbyBruteForceMethod(a, b, c) {
    const smallest = a < b ? (a < c ? a : c) : (b < c ? b : c);
    for (let i = smallest; ; i--) {
        // console.log({ i, "a%i == 0 && b%i==0 && c%i==0": a % i == 0 && b % i == 0 && c % i == 0 });

        if (a % i == 0 && b % i == 0 && c % i == 0) {
            return i;
        }
    }
}
// console.log(getLCMbyBruteForceMethod(12, 14, 16)); // Slower
// console.log(getLCMbyPrimeFactorization(getLCMbyPrimeFactorization(12, 14), 16)); // Faster

console.log(getHCFbyBruteForceMethod(100, 145, 170)); // Slower
console.log(getHCFbyPrimeFactorization(100, 145)); // Slower - mid
console.log(getHCFbyDivision(100, 145)); // Fastest


// function isPrime(n) {
//     for (let i = 2; i <= n / 2; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// function nextPrime(n) {
//     n = n + 1;

//     while (!isPrime(n)) {
//         n += 1
//     }

//     return n;
// }

// Prime Factorization
// function primeFactorization(n) {
//     if(n <= 1) return [-1];
//     const factors = [];
//     let factor = 2;
//     while (n > 1) {
//         if (n % factor == 0) {
//             factors.push(factor);
//             n = Math.floor(n / factor);
//         } else factor = nextPrime(factor)
//     }
//     return factors;
// }
