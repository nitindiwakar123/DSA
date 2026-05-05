function decimalToBinary(n) {
    if (n === 0) return "0";
    let bin = "";
    while (n > 0) {
        bin = (n % 2) + bin;
        n = Math.floor(n / 2);
    }

    return bin;
}

function hasAlternatingBits(n) {
    bin = decimalToBinary(n);
    let lastBit;
    
    while (bin.length) {
        let currentBit = bin[bin.length-1];
        if(currentBit == lastBit) return false;
        lastBit = currentBit;
        bin = bin.slice(0, bin.length-1);
    }
    return true;
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


