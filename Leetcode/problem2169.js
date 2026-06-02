function countOperations(num1, num2) {
    let count = 0;
    while (num1 != 0 && num2 != 0) {
        if (num1 >= num2) {
            num1 = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
        count++;
    }
    return count;
}

// Test Cases
// console.log(countOperations(0, 0));
// console.log(countOperations(0, 1));
// console.log(countOperations(1, 1));
// console.log(countOperations(1, 2));
// console.log(countOperations(2, 3));
// console.log(countOperations(10, 10));
// console.log(countOperations(15, 102));
