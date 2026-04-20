// While Loop Assignment 1

// Print all numbers upto 10
function printAllNumbersUptoN(n) {
    let i = 1;
    while (i<=n) {
        console.log(i);
        i++;
    }
}

// getAllNumbersUptoN(10);

// WAP to print all the numbers from n to 1.

function printAllNumbersFromNto1(n) {
    while (n>=1) {
        console.log(n);
        n--;
    }
}

// getAllNumbersFromNto1(100);

// WAP to print square of each numbers from 1 to 100.
function printSquare(n) {
    let i = 1;
    while (i<=n) {
        console.log(i*i);
        i++;
    }
}

// printSquare(10);

// WAP to print all the numbers from 1 to 100 which are perfect square.

function printPerfectSquare(n) {
    let i = 1;
    while (i*i<=n) {
        console.log(i*i);
        i++;
    }
}

// printPerfectSquare(10);

// WAP to print and count all the numbers from 1 to 100 which are perfect square.

function printAndCountPerfectSquare(n) {
    let i = 1;
    let count = 0;
    while (i*i<=n) {
        console.log(i*i);
        count++;
        i++;
    }

    console.log(`Count is: ${count}`);
}

// printAndCountPerfectSquare(10);

// WAP to print cube of each numbers from 1 to 100.
function printCubeOfEach(n) {
    let i = 1;
    while (i<=n) {
        console.log(i*i*i);
        i++;
    }
}

// printCubeOfEach(100);

// WAP to print all the numbers from 1 to 100 which are perfect cube.
function printPerfectCube(n) {
    let i = 1;
    while (i**3<=n) {
        console.log(i**3); // i**3 = i*i*i
        i++;
    }
}

// printPerfectCube(100);

// WAP to print and count all the numbers from 1 to 100 which are perfect cube.
function printAndCountPerfectCube(n) {
    let i = 1;
    let count = 0;
    while (i**3<=n) {
        console.log(i**3); // i**3 = i*i*i
        count++;
        i++;
    }
    console.log(`Count is: ${count}`);
}

// printAndCountPerfectCube(1000);

