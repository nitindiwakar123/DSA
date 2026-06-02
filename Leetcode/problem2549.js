function findAllNumbers(x) {
    let nums = [];
    for (let i = 1; i <= x; i++) {
        if (x % i === 1) {
            nums.push(i);
        }
    }
    for (const num of nums) {
        let newNums = findAllNumbers(num);
        nums = [...nums, ...newNums]
    }

    return nums;
}

function distinctIntegers(n) {
    let newNums = findAllNumbers(n);
    return [n, ...new Set(newNums)].length;
}


// Pattern: number of distinct integers = n-1 for n>1
function distinctIntegers(n) {
    return n==1? n: n-1;
}

// Test Cases
// console.log(distinctIntegers(5));
// console.log(distinctIntegers(6));
// console.log(distinctIntegers(7));
// console.log(distinctIntegers(9));
// console.log(distinctIntegers(34));
// console.log(distinctIntegers(67));
// console.log(distinctIntegers(89));
// console.log(distinctIntegers(78));