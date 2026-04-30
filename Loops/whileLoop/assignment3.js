// Write a program to take a user input and print each digits of the number one by one from right to left.

function printEachDigit(n) {
    while (n > 0) {
        console.log(Math.floor(n % 10));
        n = Math.floor(n / 10);
    }
}
// printEachDigit(353);

// Write a java program to take a user input and print each even digits of the number one by one.
function printEachEvenDigit(n) {
    while (n > 0) {
        const rem = Math.floor(n % 10);
        if ((rem & 1) == 0) console.log(rem);
        n = Math.floor(n / 10);
    }
}

// printEachEvenDigit(43563);

// Write a java program to take a user input and print each odd digits of the number one by one.
function printEachOddDigit(n) {
    while (n > 0) {
        const rem = Math.floor(n % 10);
        if ((rem & 1) == 1) console.log(rem);
        n = Math.floor(n / 10);
    }
}

// printEachOddDigit(546456);

// Write a program to take a user input and print each digits of the number which are greater than or equals to 5 one by one.
function printDigit(n) {
    while (n > 0) {
        const rem = Math.floor(n % 10);
        if (rem >= 5) console.log(rem);
        n = Math.floor(n / 10);
    }
}
// printDigit(546456);

// Write a java program to take a user input and print the biggest digit of the number.
function printBiggestDigit(n) {
    let big = 0;
    while (n > 0) {
        if ((n % 10) > big) big = n % 10;
        n = Math.floor(n / 10);
    }

    console.log(`Biggest is: ${big}`);
}

// printBiggestDigit(3945);

// Write a program to take a user input and print the difference of biggest digit and smallest digit of the number.
function printDifference(n) {
    let big = n % 10;
    let small = n % 10;

    while (n > 0) {
        let rem = n % 10;
        if (rem > big) {
            big = rem;
        } else if (rem < small) {
            small = rem
        }
        n = Math.floor(n / 10);
    }

    console.log(`Difference is: ${big - small}`);
}
// printDifference(42375);

// Write a java program to take a user input and count the total digit of the number.
// function countDigits(n) {
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }

//     return count;
// }

// console.log(countDigits(456434545));

// Write a java program to take a user input and count how many 0 digit is in number.
function countZeroDigits(n) {
    let count = 0;
    while (n > 0) {
        if ((n % 10) == 0) count++
        n = Math.floor(n / 10);
    }

    return count;
}
// console.log(countZeroDigits(2000));

// Write a java program to take a user input and count how many 3 has appeared in the number.
function countThreeDigits(n) {
    let count = 0;
    while (n > 0) {
        if ((n % 10) == 3) count++
        n = Math.floor(n / 10);
    }

    return count;
}
// console.log(countThreeDigits(133213));

// Write a java program to take a user input and count the even digits of the number.
function countEvenDigits(n) {
    let count = 0;
    while (n > 0) {
        if ((n % 10 & 1) == 0) count++
        n = Math.floor(n / 10);
    }

    return count;
}

// console.log(countEvenDigits(435465463));

// Write a java program to take a user input and count the odd digits of the number.
function countOddDigits(n) {
    let count = 0;
    while (n > 0) {
        if ((n % 10 & 1) == 1) count++
        n = Math.floor(n / 10);
    }

    return count;
}

// console.log(countOddDigits(42765));

// Write a java program to take a user input and count all the digits of the number which are less than or equals to 5.
function countDigits(n) {
    let count = 0;
    while (n > 0) {
        if ((n % 10) <= 5) count++
        n = Math.floor(n / 10);
    }

    return count;
}
// console.log(countDigits(435328495));

// Write a java program to take a user input and print the sum of each digit of the number.
// function printSumOfDigits(n) {
//     let sum = 0;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     console.log("Sum is: ", sum);
// }
// printSumOfDigits(23);

// Write a java program to take a user input and print the sum of each even digits of the number.
function printSumOfEvenDigits(n) {
    let sum = 0;
    while (n > 0) {
        const rem = n % 10;
        if ((rem & 1) == 0) sum += rem;
        n = Math.floor(n / 10);
    }
    console.log("Sum is: ", sum);
}

// printSumOfEvenDigits(42765);

// Write a java program to take a user input and print the sum of each odd digits of the number.
function printSumOfOddDigits(n) {
    let sum = 0;
    while (n > 0) {
        const rem = n % 10;
        if ((rem & 1) == 1) sum += rem;
        n = Math.floor(n / 10);
    }
    console.log("Sum is: ", sum);
}

// printSumOfOddDigits(42763);

// Write a java program to take a user input and print the sum of each digits of the number which are less than or equals to 5.
function printSumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        const rem = n % 10;
        if (rem <= 5) sum += rem;
        n = Math.floor(n / 10);
    }
    console.log("Sum is: ", sum);
}
// printSumOfDigits(73874);

function addDigits(num) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += (num % 10);
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

// console.log(addDigits(38));

// Write a java program to take a user input and reverse the number.
function reverse(n) {
    let rev = 0;
    while (n>0) {
        rev = rev*10+(n%10);
        n = Math.floor(n/10);
    }
    return rev;
}
// console.log(reverse(34535));



