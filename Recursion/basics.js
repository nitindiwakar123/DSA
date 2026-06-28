
// calculate the sum of digits of n
// parameterised approach
// function sumOfDigits(n, sum) {
//     if (n < 1) {
//         return sum;
//     }

//     sum += n % 10;
//     n = Math.floor(n / 10);
//     return sumOfDigits(n, sum);
// }

// functional approach
// function sumOfDigits(n) {
//     if (n == 0) return 0;

//     return n % 10 + sumOfDigits(Math.floor(n / 10));
// }

// console.log(sumOfDigits(123));


// return true if n is increasing order
// parameterised approach
// function isNumberInIncreasingOrder(n, last) {
//     if (n < 1) {
//         return true;
//     }

//     if (n % 10 <= last)
//         return isNumberInIncreasingOrder(Math.floor(n / 10), n % 10);
//     else
//         return false;

// }


function isIncreasing(n) {
    if (n < 1)
        return true;

    return n % 10 >= Math.floor(n / 10) % 10 && isIncreasing(Math.floor(n / 10));
}

let n = 1933;
// console.log(isIncreasing(n));

// WAP to print square of each numbers from 1 to 100.
// function printSquare(i, n) {
//     if(i > n) 
//         return;

//     console.log(i*i);
//     printSquare(i+1, n)

// }

// functional approach
function printSquare(n) {
    if (n == 1)
        return n;

    console.log(n * n);
    return printSquare(n - 1);
}

// console.log(printSquare(10));

// WAP to print all the numbers from 1 to 100 which are perfect square.
// function printPerfectSquare(i, n) {
//     if(i*i > n)
//         return;

//     console.log(i*i);
//     printPerfectSquare(i+1, n);
// }

// WAP to count all the numbers from 1 to 100 which are perfect square.
function countPerfectSquare(i, n) {
    if (i * i >= n)
        return i;

    return countPerfectSquare(i + 1, n);
}

// console.log(countPerfectSquare(1, 100));

function printCubeOfEach(n) {
    if (n == 1) {
        console.log(1);
        return 1;
    }

    printCubeOfEach(n - 1);
    console.log(n * n * n);
}

// printCubeOfEach(10);