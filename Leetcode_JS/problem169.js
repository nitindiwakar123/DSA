// brute
// time - O(n^2)
// space - O(1)
// function majorityElement(nums) {
//     const n = nums.length;
//     let maxFreq = 0;
//     let element = nums[0];


//     for (let i = 0; i < n; i++) {
//         let count = 0;
//         for (let j = i; j < n; j++) {
//             if (nums[i] == nums[j])
//                 count++;
//         }

//         if (count > maxFreq) {
//             maxFreq = count;
//             element = nums[i];
//         }
//     }

//     return element;
// }


// better
// time - O(n^2)
// space - O(1)
// function majorityElement(nums) {
//     const n = nums.length;
//     let maxFreq = 0;
//     let element = nums[0];


//     for (let i = 0; i < n; i++) {
//         if(nums[i] == nums[i-1]) continue; // further optimization of brute
//         let count = 0;
//         for (let j = i; j < n; j++) {
//             if (nums[i] == nums[j])
//                 count++;
//         }

//         if (count > maxFreq) {
//             maxFreq = count;
//             element = nums[i];
//         }
//     }

//     return element;
// }

// via sorting
// time - O(n)
// space - O(1) // not prefered
// function majorityElement(nums) {
//     nums.sort((a, b) => a - b);
//     return nums[Math.floor(nums.length/2)];
// }

// optimal
// with hashing
// time - O(n)
// space - O(n)
// function majorityElement(nums) {
//     const n = nums.length;
//     const hashmap = new Map();

//     for (const element of nums) {
//         const val = (hashmap.get(element) ?? 0) + 1;

//         if (val >= n / 2)
//             return element;

//         hashmap.set(element, val);
//     }
// }

// by moore voting algo
// time - O(n)
// space - O(1)
function majorityElement(nums) {
    let count = 0;
    let candidate = 0;

    for (const n of nums) {
        if(count == 0) {
            candidate = n;
        }
        
        if (n == candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

// Test Cases
// console.log(majorityElement([2,2,1,1,1,1,1,2,2])); // 1
// console.log(majorityElement([3,2,3])); // 3

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
// 
// console.log(majorityElement([1])); // 1

// console.log(majorityElement([5,5])); // 5

// console.log(majorityElement([1,2,1])); // 1

// console.log(majorityElement([2,1,2])); // 2

// console.log(majorityElement([7,7,7,7,7])); // 7

// console.log(majorityElement([9,1,9,2,9,3,9])); // 9

// console.log(majorityElement([-1,-1,-1,2,3])); // -1

// console.log(majorityElement([-5,-5,-5,-5,1,2,3])); // -5

// console.log(majorityElement([1000000000,1,1000000000])); // 1000000000

// console.log(majorityElement([0,0,0,1,2])); // 0

// console.log(majorityElement([4,4,4,2,2])); // 4

// console.log(majorityElement([8,8,9])); // 8

// console.log(majorityElement([6,5,6,6,4])); // 6

// console.log(majorityElement([10,10,10,20,30,40,10])); // 10

// console.log(majorityElement([1,2,3,4,5,5,5,5,5])); // 5

// console.log(majorityElement([2,3,2,4,2,5,2,6,2])); // 2

// console.log(majorityElement([99,1,99,2,99,3,99,4,99])); // 99

// console.log(majorityElement([11,11,11,11,2,3,4])); // 11