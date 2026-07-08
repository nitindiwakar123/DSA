// function trailingZeroes(n) {
//     let numberOfZeroes = 0;
//     let pow = 1;
//     while (Math.floor(n/5**pow)>0) {
//         numberOfZeroes += Math.floor(n/5**pow);
//         pow++;
//     }
//     return numberOfZeroes;
// }

// function trailingZeroes(n) {
//     let count = 0;
//     let num = n;
//     let pow = 1;
//     while (n>0) {
//         n = Math.floor(num/5**pow);
//         count += n;
//         pow++;
//     }
//     return count;
// }

function trailingZeroes(n) { // Most optimized
    let count = 0;
    while (n>4) {
        n = Math.floor(n/5);
        count += n;
    }
    return count;
}

// Test Cases
// console.log(trailingZeroes(0));
// console.log(trailingZeroes(1));
// console.log(trailingZeroes(2));
// console.log(trailingZeroes(3));
// console.log(trailingZeroes(4));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(32));
// console.log(trailingZeroes(96));
