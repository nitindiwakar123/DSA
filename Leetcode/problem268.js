// brute
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

// Time & Space Complexity Analysis
// brute - time - O(n+n) = O(n)
//         space - S(n)

// Test Cases
// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([10,9,8,7,6,5,4,3,2,1,0]));
// console.log(missingNumber([0,1,2,4,5,6,7,8,9]));
// console.log(missingNumber([1,0,3,4]));
// console.log(missingNumber([1]));
