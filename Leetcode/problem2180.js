function getSumOfDigits(n) {
    let sum = 0;
    while (n>0) {
        sum += (n%10);
        n = Math.floor(n/10);
    }
    return sum;
}

function countEven(num) {
    let count = 0;
    for (let i = 1; i<= num; i++) {
        if(getSumOfDigits(i) % 2 === 0) {
            count++;
        }
    }
    return count;
}

// Test Cases
console.log(countEven(1));
console.log(countEven(4));
console.log(countEven(30));
console.log(countEven(17));
console.log(countEven(22));
console.log(countEven(25))
