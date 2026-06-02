function findAllNumbers(x) {
    let nums = [];
    for (let i = 1; i <= x; i++) {
        if (x % i === 1) {
            nums.push(i);
        }
    }
    console.log({nums});
    

    for (const num of nums) {
        let newNums = findAllNumbers(num);
        console.log({newNums});
        
        nums = [...nums, ...newNums]
    }

    return nums;
}

function distinctIntegers(n) {
    let newNums = findAllNumbers(n);
    return [n, ...new Set(newNums)].length;
}

// Test Cases
console.log(distinctIntegers(5));