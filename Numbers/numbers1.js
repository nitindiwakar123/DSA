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

// WAJP to print and count all the perfect numbers in the given range.
function isPerfectNumber(num) {
    let sum = 1
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            sum += i;
            const secondFactor = num / i;
            if (secondFactor != i) {
                sum += secondFactor;
            }
        }
    }
    return (num < 2) ? false : sum == num;
}

function printAndCountPerfectNumbersInRange1(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPerfectNumber(i)) {
            console.log(i);
            count++;
        }
    }

    console.log("Count: ", count);
}

// Optimized
function printAndCountPerfectNumbersInRange2(start, end) {
    const perfects = [6, 28, 496, 8128];

    for (const number of perfects) {
        if (number > start && number <= end) {
            console.log(number);
        }
    }
}

// printAndCountPerfectNumbersInRange2(1, 100);

// WAJP to print kth perfect number.

// Optimized
function printKthPerfectNumber(k) {
    const perfectNumbers = [
        "6",
        "28",
        "496",
        "8128",
        "33550336",
        "8589869056",
        "137438691328",
        "2305843008139952128",
        "2658455991569831744654692615953842176",
        "191561942608236107294793378084303638130997321548169216",
        "13164036458569648337239753460458722910223472318386943117783728128",
        "14474011154664524427946373126085988481573677491474835889066354349131199152128"
    ];

    console.log(perfectNumbers[k - 1]);
}

function printKthPerfectNumber1(k) {
    let count = 0;
    for (let i = 1; i < 10000; i++) {
        if (isPerfectNumber(i)) {
            count++;
            if (count == k) {
                console.log(i);
                break;
            }
        }
    }
}
// printKthPerfectNumber(1);

// WAJP to take user input and print whether the number is Prime number or not.
// Worst performance
function isPrime1(n) {
    if (n == 0 || n == 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Better than first one total iteration = n/2
function isPrime2(n) {
    if (n == 0 || n == 1) return false;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Most Optimized
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
// console.log(isPrime3(2));

// WAJP to print and count all the Prime numbers up to a given range.
function printAndCountPrimesInRange1(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
            count++
        }
    }
    console.log(`Count: ${count}`);
}

function printAndCountPrimesInRange2(start, end) {
    let count = 0;
    if (start == 1 || start == 2) {
        count++;
        console.log(2);
    }
    if (start % 2 == 0)
        start++;

    for (let i = start; i <= end; i += 2) {
        if (isPrime(i)) {
            console.log(i);
            count++;
        }
    }
    console.log("Count: ", count);
}

// printAndCountPrimesInRange2(2, 20);

// WAJP to take user input and print nth prime number.
function getKthPrime(k) {
    if (k < 1) return -1;
    if (k == 1) return 2;
    let count = 1;
    let i = 3;
    while (true) {
        if (isPrime(i)) {
            count++;
            if (count == k)
                return i;
        }
        i += 2;
    }
}

// console.log(getKthPrime(100));

// WAJP to print all the alternate Prime numbers up to a given range.
function printAlternatePrimes(start, end) {
    let count = 0;
    if (start == 1 || start == 2) {
        count++
        console.log(2);
    }
    if (start % 2 == 0) {
        start++;

    }
    for (let i = start; i <= end; i += 2) {
        if (isPrime(i)) {
            count++;
            if (count % 2 != 0)
                console.log(i);
        }
    }
}

// printAlternatePrimes(1, 30);

// WAJP to print and count all prime numbers in a range where sum of digits is also prime number.
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}

function printAndCountPrimes(start, end) {
    let count = 0;
    if (start == 1 || start == 2) {
        count++;
        console.log(2);
        start++;
    }

    if (start % 2 == 0) start++;

    for (let i = start; i <= end; i += 2) {
        if (isPrime(i) && isPrime(sumOfDigits(i))) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// printAndCountPrimes(1, 20);

// WAJP to take user input and check the number is palindrome or not.
function isPalindrome(n) {
    let rev = 0;
    const num = n;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return rev == num;
}

// console.log(isPalindrome(121));

// WAJP to print and count all the palindrome numbers in a given range.
function printAndCountPalidromeInRange1(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// One small improvement we can skip the numbers with ending zeoroes they are never palindrome except 0.
function printAndCountPalidromeInRange(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 10 === 0 && i !== 0) continue;
        if (isPalindrome(i)) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// printAndCountPalidromeInRange(1, 1000);

// WAJP to take user input and print nth palindrome number.
function printNthPalindrome(n) {
    if (n < 1) return;
    let i = 0;
    let count = 0;
    while (true) {
        if (isPalindrome(i)) {
            count++;
            if (count == n) {
                console.log(i);
                return;
            }
        }
        i++;
    }
}

// printNthPalindrome(10);

// WAJP to print and count all the palindrome numbers in a range which is also a prime number.
function printAndCountPalindromicPrimesInRange(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 10 === 0 && i !== 0) continue;
        if (isPalindrome(i) && isPrime(i)) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// printAndCountPalindromicPrimesInRange(1, 1000);

// WAJP to take user input and print whether the number is Strong number or not.
function isStrongNumber1(n) {
    if (n == 0) return false;
    let sum = 0;
    const num = n;
    while (n > 0) {
        let rem = n % 10;
        let factorial = rem;
        rem -= 1;
        while (rem > 1) {
            factorial *= rem;
            rem--;
        }
        sum += factorial;
        n = Math.floor(n / 10);
    }
    return num == sum;
}

// Optimized
function isStrongNumber(n) {
    if (n == 0) return false;
    const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    let sum = 0;
    const num = n;
    while (n > 0) {
        let rem = n % 10;
        sum += factorial[rem];
        n = Math.floor(n / 10);
    }
    return num == sum;
}

// console.log(isStrongNumber(0));
// console.log(isStrongNumber(1));
// console.log(isStrongNumber(9));
// console.log(isStrongNumber(145));
// console.log(isStrongNumber(40585));

// WAJP to print and count all the Strong numbers up to 100.
function printAndCountStrongNumbers(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (isStrongNumber(i)) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// printAndCountStrongNumbers(1000);

// WAJP to take user input and print whether the number is an Armstrong number or not.

function getDigitCount(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}

function getPower(a, b) {
    let pow = 1;
    while (b > 0) {
        pow *= a;
        b--;
    }
    return pow;
}

function isArmstrong1(n) {
    let sum = 0;
    let num = n;
    const digits = getDigitCount(n);
    while (n > 0) {
        sum += getPower(n % 10, digits);
        n = Math.floor(n / 10);
    }
    return num == sum;
}

function isArmstrong(n) {
    let sum = 0;
    let num = n;
    const digits = getDigitCount(n);
    while (n > 0) {
        sum += (n % 10) ** digits;
        n = Math.floor(n / 10);
    }
    return num == sum;
}

// console.log(isArmstrong(0));
// console.log(isArmstrong(1));
// console.log(isArmstrong(9));
// console.log(isArmstrong(10));
// console.log(isArmstrong(120));
// console.log(isArmstrong(153));
// console.log(isArmstrong(370));

// WAJP to print and count all the Armstrong numbers up to 100.
function printAndCountArmstrongNumbers(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (isArmstrong(i)) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// printAndCountArmstrongNumbers(10000);

// WAJP to take user input and print whether the number is dissarium number or not.
function isDissarium(n) {
    if (n < 1) return false;
    let sum = 0;
    const num = n;
    let digits = getDigitCount(n);
    while (n > 0) {
        // console.log({sum, n, digits, curDigit: n%10, "n%10**digits": (n%10)**digits}); 
        sum += (n % 10) ** digits;
        digits--;
        n = Math.floor(n / 10);
    }
    return num == sum;
}

// console.log(isDissarium(0));
// console.log(isDissarium(518));

// WAJP to print and count all the dissarium numbers in a range.
function printAndCountDissariumNumbers(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (isDissarium(i)) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// printAndCountDissariumNumbers(100);

// WAJP to print and count all the Happy numbers up to 100
function isHappy(n) {
    while (n > 9) {
        let sum = 0;
        while (n > 0) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    return n == 1 || n == 7;
}

// console.log(isHappy(19));

// WAJP to print and count all the Happy numbers up to 100.
function printAndCountHappyNumbers(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (isHappy(i)) {
            count++;
            console.log(i);
        }
    }
    console.log("Count: ", count);
}

// printAndCountHappyNumbers(100);

// WAJP to take user input and print whether the number is Automorphic number or not.
// function isAutomorphicNumber(n) {
//     if (n == 0 || n == 1)
//         return true;
//     else if ((n % 10) != 5 && (n % 10) != 6)
//         return false;

//     const digits = getDigitCount(n);
//     return n == (n ** 2) % (10 ** digits);
// }

// function isAutomorphicNumber(n) {
//      if (n == 0 || n == 1)
//         return true;
//     else if ((n % 10) != 5 && (n % 10) != 6)
//         return false;
    
//     const digits = getDigitCount(n);
//     return ((n**2)-n) % (10**digits) == 0;
// }

// most optimized
function isAutomorphicNumber(n) {
     if (n == 0 || n == 1)
        return true;
    else if ((n % 10) != 5 && (n % 10) != 6)
        return false;
    
    let square = n*n;

    while (n>0) {
        const rem = n % 10;
        const squareLastDigit = square % 10;

        if(rem != squareLastDigit) return false;
        n = Math.floor(n/10);
        square = Math.floor(square/10);
    }

    return true;
}

// console.log(isAutomorphicNumber(336));

// WAJP to print and count all the Automorphic numbers up to 100.
// function printAndCountAutomorphicNumbers(n) {
//     let count = 0;
//     for (let i = 0; i<=n; i++) {
//         if(isAutomorphicNumber(i)) {
//             console.log(i);
//             count++;
//         }
//     }
//     console.log(`Count: ${count}`);
// }

// function printAndCountAutomorphicNumbers(n) {
//     let count = 2;
//     console.log(0);
//     console.log(1);
//     for (let i = 5; i<=n; i++) {
//         const rem = i%10;
//         if((rem == 5 || rem == 6) && isAutomorphicNumber(i)) {
//             console.log(i);
//             count++;
//         }
//     }
//     console.log(`Count: ${count}`);
// }

function printAndCountAutomorphicNumbers(n) {
    let count = 2;
    console.log(0);
    console.log(1);
    let i = 5;
    while (i<=n) {
        if(isAutomorphicNumber(i)) {
            console.log(i);
            count++;
        }

        ((i%10)==5)? i+=1: i+=9;
    }
    console.log(`Count: ${count}`);
}

// printAndCountAutomorphicNumbers(1000);