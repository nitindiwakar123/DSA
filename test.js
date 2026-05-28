// function trailingZeroes(n){
//     let count = 0;
//     while (n>4) {
//         n = Math.floor(n/5);
//         count += n;
//     }

//     return count;
// }

function trailingZeroes(n){
    let count = 0;
    let pow = 1;
    while (Math.floor(n/5**pow) > 0) {
        count += Math.floor(n/5**pow);
        pow++;
    }
    return count;
}


// console.log(trailingZeroes(0));
// console.log(trailingZeroes(1));
// console.log(trailingZeroes(2));
// console.log(trailingZeroes(3));
// console.log(trailingZeroes(4));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(32));
// console.log(trailingZeroes(96));
console.log(trailingZeroes(25));
