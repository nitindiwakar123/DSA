function decimalToBinary(n) {
    if (n === 0) return "0";
    let bin = "";
    while (n > 0) {
        bin = (n % 2) + bin;
        n = Math.floor(n / 2);
    }

    return bin;
}

// brute
// function hasAlternatingBits(n) {
//     bin = decimalToBinary(n);
//     let lastBit;

//     while (bin.length) {
//         if (currentBit == lastBit) return false;
//         let currentBit = bin[bin.length - 1];
//         lastBit = currentBit;
//         bin = bin.slice(0, bin.length - 1);
//     }
//     return true;
// }

// better
// two pointer approach
// time complexity - O(n logn)
// function hasAlternatingBits(n) {
//     let bin = decimalToBinary(n);

//     let i = 0;
//     for (let j = i + 1; j < bin.length; j++) {
//         if(bin[i] == bin[j])
//             return false;

//         i++;
//     }

//     return true;
// }

// optimal
function hasAlternatingBits(n) {
    let x = n ^ (n >> 1);
    return (x & (x + 1)) == 0;
}


// Test Cases
// console.log(hasAlternatingBits(87381));
// console.log(hasAlternatingBits(5));
// console.log(hasAlternatingBits(0));
// console.log(hasAlternatingBits(1));

// console.log(hasAlternatingBits(5));
// console.log(hasAlternatingBits(7));
// console.log(hasAlternatingBits(11));
// console.log(hasAlternatingBits(13));
// console.log(hasAlternatingBits(17));
// console.log(hasAlternatingBits(10));
// console.log(hasAlternatingBits(100));


