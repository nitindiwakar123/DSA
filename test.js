function getDigitCount(n) {
    let count = 0;
    while (n>0) {
        count++;
        n = Math.floor(n/10);
    }
    return count;
}

function isArmstrong(n) {
    let sum = 0;
    const num = n;
    const digits = getDigitCount(n);
    while (n>0) {
        sum += (n%10)**digits
        n = Math.floor(n/10);
    }
    return sum == num;
}
function isDissarium(n) {
    let sum = 0;
    const num = n;
    let digits = getDigitCount(n);
    while (n>0) {

        sum += (n%10)**digits;
        digits--;
        n = Math.floor(n/10);
    }
    return sum == num;
}

console.log(isDissarium(370));
console.log(isArmstrong(370));