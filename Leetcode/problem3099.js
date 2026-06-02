function sumOfTheDigitsOfHarshadNumber(x) {
    let sum = 0;
    let num = x;
    while (x>0) {
        sum += (x%10);
        x = Math.floor(x/10);
    }
    return num%sum === 0? sum: -1;
}

// Test Cases
console.log(sumOfTheDigitsOfHarshadNumber(23));
