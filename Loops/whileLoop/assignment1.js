// While Loop Assignment 1

// Print all numbers upto 10
function printAllNumbersUptoN(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
}

// getAllNumbersUptoN(10);

// WAP to print all the numbers from n to 1.

function printAllNumbersFromNto1(n) {
    while (n >= 1) {
        console.log(n);
        n--;
    }
}

// getAllNumbersFromNto1(100);

// WAP to print square of each numbers from 1 to 100.
function printSquare(n) {
    let i = 1;
    while (i <= n) {
        console.log(i * i);
        i++;
    }
}

// printSquare(10);

// WAP to print all the numbers from 1 to 100 which are perfect square.

function printPerfectSquare(n) {
    let i = 1;
    while (i * i <= n) {
        console.log(i * i);
        i++;
    }
}

// printPerfectSquare(10);

// WAP to print and count all the numbers from 1 to 100 which are perfect square.

function printAndCountPerfectSquare(n) {
    let i = 1;
    let count = 0;
    while (i * i <= n) {
        console.log(i * i);
        count++;
        i++;
    }

    console.log(`Count is: ${count}`);
}

// printAndCountPerfectSquare(10);

// WAP to print cube of each numbers from 1 to 100.
function printCubeOfEach(n) {
    let i = 1;
    while (i <= n) {
        console.log(i * i * i);
        i++;
    }
}

// printCubeOfEach(100);

// WAP to print all the numbers from 1 to 100 which are perfect cube.
function printPerfectCube(n) {
    let i = 1;
    while (i ** 3 <= n) {
        console.log(i ** 3); // i**3 = i*i*i
        i++;
    }
}

// printPerfectCube(100);

// WAP to print and count all the numbers from 1 to 100 which are perfect cube.
function printAndCountPerfectCube(n) {
    let i = 1;
    let count = 0;
    while (i ** 3 <= n) {
        console.log(i ** 3); // i**3 = i*i*i
        count++;
        i++;
    }
    console.log(`Count is: ${count}`);
}

// printAndCountPerfectCube(1000);

// WAP to print all the even numbers from 1 to 100.
// Simple way, n iterations
function printAllEvenNumbers(n) {
    let i = 0;
    while (i <= n) {
        if ((i & 1) == 0) {
            console.log(i);
        }
        i++;
    }
}

// Optimized way n/2 iterations
function printAllEvenNumbersOptimized(n) {
    let i = 0;
    while (i <= n) {
        console.log(i);
        i += 2;
    }
}

// printAllEvenNumbers(10);
// printAllEvenNumbersOptimized(10);

// WAP to print all the odd numbers from 1 to 100.
function printAllOddNumbers(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i += 2;
    }
}

// printAllOddNumbers(100);

// WAP to print all the numbers from 1 to 100 which are divisible by 7.

function printNumbersDivisibleBy7(n) {
    let i = 1;
    while (i <= n) {
        if (i % 7 == 0) console.log(i);
        i++;
    }
}

// WAP to print and count all the numbers from 1 to 100 which are divisible by 7.
function printAndCountNumbersDivisibleBy7(n) {
    let i = 1;
    let count = 0;
    while (i <= n) {
        if (i % 7 == 0) {
            console.log(i);
            count++;
        };
        i++;
    }
    console.log(`Count is: ${count}`);
}

// printAndCountNumbersDivisibleBy7(10);

// WAP to print and count all the numbers from 1 to 100 which are divisible by 7 or ends with 7.
function printAndCountNumbersDivisibleByOrEndWith7(n) {
    let i = 1;
    let count = 0;
    while (i <= n) {
        if (i % 7 == 0 || i % 10 == 7) {
            console.log(i);
            count++;
        };
        i++;
    }
    console.log(`Count is: ${count}`);
}

// printAndCountNumbersDivisibleByOrEndWith7(100);

// WAP to print and count all the numbers from 1 to 1000 which are divisible by 7 and also ends with 7
function printAndCountNumbersDivisibleByAndEndWith7(n) {
    let i = 1;
    let count = 0;
    while (i <= n) {
        if (i % 7 == 0 && i % 10 == 7) {
            console.log(i);
            count++;
        };
        i++;
    }
    console.log(`Count is: ${count}`);
}
// printAndCountNumbersDivisibleByAndEndWith7(100);

// WAP to print all the factors of a number.
function printAllFactors(n) {
    let i = 1;
    while (i <= n) {
        if (n % i == 0) console.log(i);
        i++;
    }
}

// printAllFactors(28);

// WAP to count the factors of a number.
function countFactors(n) {
    let i = 1;
    let count = 0;

    while (i <= n) {
        if (n % i == 0) count++;
        i++;
    }
    return count;
}

console.log(countFactors(5));

// WAP to print and count all the factors of a number.
function printAndCountFactors(n) {
    let i = 1;
    let count = 0;

    while (i <= n) {
        if (n % i == 0) {
            console.log(i);
            count++;
        };
        i++;
    }
    console.log(`Count is: ${count}`);
}
// printAndCountFactors(10);

// WAP to print a number is a prime number or not.
function isPrimeNumber(n) {
    let i = 1;
    let count = 0;
    
    while (i<=n) {
        if(n%i==0) count++;
        i++;
    }

    return count==2;
}
// console.log(isPrimeNumber(5));