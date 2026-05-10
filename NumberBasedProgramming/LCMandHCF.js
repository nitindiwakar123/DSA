function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

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

// Prime Factorization - nextPrime is'nt neccessary
function primeFactorization(n) {
    const factors = [];
    let factor = 2;
    while (n > 1) {
        if (n % factor == 0) {
            factors.push(factor);
            n /= factor;
        } else{
            factor++;
        }
    }
    return factors;
}

function primeFactorizationOfTwoNumbers(a, b) {
    // if (a <= 1 || b <= 1) return [-1];
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

function getCommonFactors(aFactors, bFactors) {
    if(!aFactors.length || !bFactors.length) return [];
    const commonFactors = [];
    
    for (let i = 0; i < aFactors.length; i++) {
        const factor = aFactors[i];
    // console.log({aFactors, bFactors, i, factor, "bFactors.includes[aFactors[i]]": bFactors.includes(factor), commonFactors });
        if(bFactors.includes(factor)) {
            commonFactors.push(factor);
        }
    }
    return [...new Set(commonFactors)];
}

function getLCM(a, b) {
    if(a<=1 || b<=1) return 0;
    const mergedFactors = primeFactorizationOfTwoNumbers(a, b);
    let LCM = 1;
    for (let i = 0; i < mergedFactors.length; i++) {
        const factor = mergedFactors[i];
        LCM *= factor;
    }
    return LCM;
}

function getHCF(a, b) {
    const aFactors = primeFactorization(a);
    const bFactors = primeFactorization(b);
    const commonFactors = getCommonFactors(aFactors, bFactors);
    console.log({aFactors, bFactors, commonFactors});
    
    let HCF = 1;
    for (let i = 0; i < commonFactors.length; i++) {
        const factor = commonFactors[i];
        HCF *= factor;
    }
    return HCF;
}

function getLCMandHCFbyPrimeFactorization(a, b) {
    const LCM = getLCM(a, b);
    const HCF = getHCF(a, b);

    return {LCM, HCF}
}

console.log(getLCMandHCFbyPrimeFactorization(1, 0));
// console.log(getLCMandHCFbyPrimeFactorization(435, 546));