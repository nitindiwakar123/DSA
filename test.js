function getDigit(n) {
    let smallest = getDigit(Math.floor(n/10));
    let rem = n%10;
    return n>0? (rem < smallest?rem: smallest): n;
}

console.log(getDigit(345));