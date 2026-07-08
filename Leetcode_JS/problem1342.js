function numberOfSteps(num) {
    let steps = 0;
    while (num > 0) {
        if (num % 2 == 0) {
            num = Math.floor(num / 2);
        } else {
            num = num - 1;
        }
        steps++;
    }
    return steps;
}

// Test Case
// console.log(numberOfSteps(0));
// console.log(numberOfSteps(1));
// console.log(numberOfSteps(11));
// console.log(numberOfSteps(100));

// console.log(numberOfSteps(000));
// console.log(numberOfSteps(111));
// console.log(numberOfSteps(17));

// console.log(numberOfSteps(10));
// console.log(numberOfSteps(100));
// console.log(numberOfSteps(1000));

