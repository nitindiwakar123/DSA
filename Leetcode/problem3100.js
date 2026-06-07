// Water Bottles II

function maxBottlesDrunk(numBottles, numExchange) {
    let maxBottlesDrunk = numBottles;
    while (numBottles >= numExchange) {
        maxBottlesDrunk += 1;
        numBottles = numBottles-numExchange + 1;
        numExchange++;
    }

    return maxBottlesDrunk;
};


// Test Cases
console.log(maxBottlesDrunk(13, 6));
// console.log(maxBottlesDrunk(10, 3));
// console.log(maxBottlesDrunk(3, 2));
// console.log(maxBottlesDrunk(3, 2));
// console.log(maxBottlesDrunk(5, 2));
// console.log(maxBottlesDrunk(5, 2));
// console.log(maxBottlesDrunk(1, 2));
// console.log(maxBottlesDrunk(2, 2));
// console.log(maxBottlesDrunk(2, 3));
// console.log(maxBottlesDrunk(3, 4));
// console.log(maxBottlesDrunk(100, 100));

// console.log(maxBottlesDrunk(1000, 2));
