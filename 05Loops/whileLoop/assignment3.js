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

// Write a java program to take a user input and print each digits of the number which are greater than or equals to 5 one by one.
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
    let big = n%10;
    let small = n%10;

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
// printDifference(587);


