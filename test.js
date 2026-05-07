// function decimalToOctal(n) {
//     let mul = 1;
//     let oct = 0;
//     while (n>0) {
//         oct = (n%8)*mul+oct;
//         mul *= 10;
//         n = Math.floor(n/8);
//     }
//     return oct;
// }

function decimalToBaseK(n, k) {
    let mul = 1;
    let res = 0;
    while (n>0) {
        res = (n%k)*mul+res;
        mul *= 10;
        n = Math.floor(n/k);
    }
    return res;
}

console.log(decimalToBaseK(120, 5));
