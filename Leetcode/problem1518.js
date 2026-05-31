function numWaterBottles(numBottles, numExchange) {
    let total = numBottles;
    while (numBottles >= numExchange) {
        const newEmptyBottles = Math.floor(numBottles / numExchange);
        total += newEmptyBottles;
        numBottles = (numBottles % numExchange)+newEmptyBottles;
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
// console.log(numWaterBottles(12, 4));
console.log(numWaterBottles(65, 3));
