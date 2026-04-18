function powerOfThree(n) {
    if (n == 1) return true;

    if (n > 0 && n % 3 == 0) {
        while (n > 1) {
            n = n / 3;
        }
        return n == 1;
    }

    return false;
}

// Test Cases
// console.log(powerOfThree(-1));
// console.log(powerOfThree(0));
// console.log(powerOfThree(27));
// console.log(powerOfThree(81));
// console.log(powerOfThree(243));
// console.log(powerOfThree(59049));
console.log(powerOfThree(1));
// console.log(powerOfThree(10));
// console.log(powerOfThree(45));
// console.log(powerOfThree(-27));
// console.log(powerOfThree(1162261467));
// console.log(powerOfThree(1162261468));