// brute - using hashing
function missingNumber(nums) {
    const freq = new Array(nums.length + 1).fill(0);

    for (const n of nums) {
        freq[n] = 1;
    }

    for (let i = 0; i < freq.length; i++) {
        if(freq[i] == 0)
            return i;
    }

    return -1;
}

// better - using temp array
// function missingNumber(nums) {
//     const temp = new Array(nums.length + 1).fill(-1);

//     for (const n of nums) {
//         temp[n] = n;
//     }

//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i] == -1)
//             return i;
//     }

//     return -1;
// }


// optimal- Sum of all elememnts
// function missingNumber(nums) {
//     const n = nums.length;
//     const sum1 = n * (n + 1) / 2;
//     const sum2 = nums.reduce((acc, ele) => acc + ele, 0);

//     return sum1 - sum2;
// }


// optimal - using XOR

function missingNumber(nums) {
    const n = nums.length;
    let XOR1 = 0;
    let XOR2 = 0;

    for (let i = 0; i < n; i++) {
        XOR1 ^= i+1;
        XOR2 ^= nums[i];
    }

    return XOR1 ^ XOR2;
}

// Test Cases
// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([10,9,8,7,6,5,4,3,2,1,0]));
// console.log(missingNumber([0,1,2,4,5,6,7,8,9]));
// console.log(missingNumber([1,0,3,4]));
// console.log(missingNumber([1]));

// Time & Space Complexity Analysis
// brute - time - O(n+n)
//         space - S(n)
// better - time - O(n+n)
// optimal(sum of all) - time - O(n)
//              space - S(1)

//  optimal(XOR) - time - O(n)
//              space - S(1) (prefered)


