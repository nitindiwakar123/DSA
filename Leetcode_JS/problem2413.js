function smallestEvenMultiple(n) {
    if (n % 2 === 0) return n;

    let i = 2;
    while (true) {
        const multiple = n * i;
        if (multiple % 2 === 0)
            return multiple;
    }
}

// Test Cases
// console.log(smallestEvenMultiple(6));
// console.log(smallestEvenMultiple(5));
// console.log(smallestEvenMultiple(0));
// console.log(smallestEvenMultiple(1));
