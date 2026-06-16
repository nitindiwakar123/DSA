// 167. Two Sum II - Input Array Is Sorted

// brute
function twoSum(numbers, target) {
    const n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {

            const current = numbers[i] + numbers[j];
            if (current == target)
                return [i + 1, j + 1];
        }
    }

    return [-1, -1];
}

// Test Cases
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 7, 11, 15], 26));
// console.log(twoSum([2,3,4], 6));
// console.log(twoSum([-1,0], -1));
// console.log(twoSum([1,2], 3));
// console.log(twoSum([-10,-5,-2,1,3], -7)); // [1, 5]
// console.log(twoSum([-8,-4,0,4,8], 0));
// console.log(twoSum([1,2,3,4,4,9], 8));
// console.log(twoSum([1,2,8,10,15], 3));
// console.log(twoSum([1,3,5,7,9,11], 20));
// console.log(twoSum([1,2,3,4,100], 101));
