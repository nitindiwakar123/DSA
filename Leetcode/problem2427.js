// brute
// function commonFactors(a, b) {
//     let small = a>b? b: a;
//     let count = 0;
//     let i = 1;
//     while (i<=small) {
//         if(a%i==0 && b%i==0) count++;
//         i++;
//     }

//     return count;
// }

// console.log(commonFactors(1, 1));
// console.log(commonFactors(22, 88));


// function commonFactors(a, b) {
//     const smallest = a > b ? b : a;
//     const biggest = a > b? a: b;
//     let count = 0;

//     if(biggest%smallest == 0) count++;

//     for (let i = 1; i <= smallest/2; i++) {
//         if (a % i == 0 && b % i == 0) {
//             count++;
//         }
//     }
//     return count;
// }


// Most Optimized Solution
function getHcf(a, b) {
    if (a <= 0 && b <= 0) {
        return undefined;
    } else if (a == 1 || b == 1) {
        return 1;
    };
    let rem = 1;
    let dividend = a > b ? a : b;
    let divisor = a > b ? b : a;

    while (rem > 0) {
        rem = dividend % divisor;
        dividend = divisor;
        divisor = rem;
    }
    return dividend;
}

function commonFactors(a, b) {
    const hcf = getHcf(a, b);

    let count = 1;
    for (let i = 1; i <= hcf/2; i++) {
        if (hcf%i == 0) {
            count++;
        }
    }
    return count;
}


// Test Cases
console.log(commonFactors(1, 1)); // 1
console.log(commonFactors(1, 2)); // 1
console.log(commonFactors(2, 4)); // 2

// console.log(commonFactors(4, 18));
// console.log(commonFactors(8, 4));
// console.log(commonFactors(8, 18));
// console.log(commonFactors(18, 8));


// console.log(commonFactors(100, 2)); // 2
// console.log(commonFactors(2, 100)); // 2

// // Prime Numbers
// console.log(commonFactors(5, 7)); // 1
// console.log(commonFactors(7, 5)); // 1
// console.log(commonFactors(11, 13)); // 1
// console.log(commonFactors(13, 11)); // 1

// // Perfect Squares
// console.log(commonFactors(16, 25)); // 1
// console.log(commonFactors(8, 16)); // 4

// // Larger Numbers
// console.log(commonFactors(100, 99));
// console.log(commonFactors(100, 99));
// console.log(commonFactors(100, 102));

// // Same numbers
// console.log(commonFactors(6, 6)); // 4 (1,2,3,6)
// console.log(commonFactors(13, 13)); // 2 (1,13)

// // One divides the other
// console.log(commonFactors(3, 12)); // 2 (1,3)
// console.log(commonFactors(4, 20)); // 3 (1,2,4)
// console.log(commonFactors(5, 25)); // 2 (1,5)

// // Co-prime numbers (GCD = 1)
// console.log(commonFactors(8, 15)); // 1
// console.log(commonFactors(14, 25)); // 1
// console.log(commonFactors(35, 64)); // 1

// // Numbers with multiple common factors
// console.log(commonFactors(12, 18)); // 4 (1,2,3,6)
// console.log(commonFactors(24, 36)); // 6 (1,2,3,4,6,12)
// console.log(commonFactors(48, 60)); // 6 (1,2,3,4,6,12)

// // Large common divisor cases
// console.log(commonFactors(100, 50)); // 6 (1,2,5,10,25,50)
// console.log(commonFactors(81, 27)); // 4 (1,3,9,27)

// // Perfect square interactions
// console.log(commonFactors(36, 49)); // 1
// console.log(commonFactors(36, 18)); // 6 (1,2,3,6,9,18)

// // Powers of same prime
// console.log(commonFactors(8, 32)); // 4 (1,2,4,8)
// console.log(commonFactors(9, 27)); // 3 (1,3,9)

// // Mixed random
// console.log(commonFactors(45, 75)); // 4 (1,3,5,15)
// console.log(commonFactors(56, 98)); // 4 (1,2,7,14)