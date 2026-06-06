function numWaterBottles(numBottles, numExchange) {
    let total = numBottles;
    while (numBottles>=numExchange) {
        fullB = Math.floor(numBottles/numExchange);
        total += fullB;
        numBottles = numBottles%numExchange+fullB;
    }
    return total;
}

// Test Cases
// console.log(numWaterBottles(1, 100));
// console.log(numWaterBottles(2, 2));
// console.log(numWaterBottles(3, 2));
// console.log(numWaterBottles(4, 2));
// console.log(numWaterBottles(5, 2));
// console.log(numWaterBottles(14, 4));
// console.log(numWaterBottles(25, 4));
// console.log(numWaterBottles(12, 3));
// console.log(numWaterBottles(9, 3));
// console.log(numWaterBottles(65, 3));
