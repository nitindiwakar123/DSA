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

printSquare(10)