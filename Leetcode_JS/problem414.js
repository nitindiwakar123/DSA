// brute
function getThirdMax(nums) {
    let firstMax = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;
    let thirdMax = Number.MIN_SAFE_INTEGER;

    for (const n of nums) {
        if (n > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = n;
        } else if (n < firstMax && n > secondMax) {
            thirdMax = secondMax;
            secondMax = n;
        } else if (n < secondMax && n > thirdMax) {
            thirdMax = n;
        }
    }

    return thirdMax == Number.MIN_SAFE_INTEGER ? firstMax : thirdMax;
}

// Time & Space Complexity
// brute - O(n), S(1)

// Test Cases
// console.log(getThirdMax([3,2,1]));
// console.log(getThirdMax([1,2]));
// console.log(getThirdMax([2,2,3,1]));
// console.log(getThirdMax([1,1,1,2,2,3]));
// console.log(getThirdMax([5,5,4,4,3,3]));
// console.log(getThirdMax([5,5,4,4,3,3]));
// console.log(getThirdMax([2,2,3,3]));
// console.log(getThirdMax([-10, -20, -30, -40]));
// console.log(getThirdMax([-5,-4,-3,-2,-1]));
// console.log(getThirdMax([-10,0,5,5]));
// console.log(getThirdMax([1000000000,999999999,999999998]));
// console.log(getThirdMax([1]));
