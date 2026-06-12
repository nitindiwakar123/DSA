function getHCF(dividend, divisor) {
    while (divisor != 0) {
        const rem = dividend % divisor;
        dividend = divisor;
        divisor = rem;
    }

    return dividend;
}

// optimal
function findGCD(nums) {
    let largest = nums[0];
    let smallest = nums[0];

    for (const n of nums) {
        if (n > largest)
            largest = n;
        else if (n < smallest)
            smallest = n;
    }

    return getHCF(largest, smallest);
}


// Test Cases
// console.log(findGCD([1, 1]));
// console.log(findGCD([1, 2]));
// console.log(findGCD([2, 5, 6, 9, 10]));
// console.log(findGCD([4, 5, 6, 8, 12]));
// console.log(findGCD([2, 5, 6, 9, 10]));
// console.log(findGCD([7, 11, 13]));
// console.log(findGCD([8, 15, 22]));
// console.log(findGCD([42, 42, 42]));