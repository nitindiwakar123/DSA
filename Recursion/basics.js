
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