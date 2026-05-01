function mirrorDistance(n) {
    let rev = 0;
    let num = n;
    while (n>0) {
        rev = rev*10+(n%10);
        n = Math.floor(n/10);
    }
    const distance = num-rev;
    return (distance<0)? -distance: distance;
}

// Test Cases

// Single digit numbers
// console.log(mirrorDistance(1));
// console.log(mirrorDistance(2));
// console.log(mirrorDistance(5));
// console.log(mirrorDistance(7));
// console.log(mirrorDistance(9));

// pattern - for single digit numbers mirrorDistance = 0

// console.log(mirrorDistance(0));
// console.log(mirrorDistance(10));

// Palindrome numbers
// console.log(mirrorDistance(777));
// console.log(mirrorDistance(999));
// console.log(mirrorDistance(111));
// console.log(mirrorDistance(222));
// console.log(mirrorDistance(121));
// console.log(mirrorDistance(545));
// console.log(mirrorDistance(343));
// console.log(mirrorDistance(959));

// pattern - for palindorome numbers mirrorDistance = 0

// Prime numbers
// console.log(mirrorDistance(11));
// console.log(mirrorDistance(17));
// console.log(mirrorDistance(13));

// Numbers ending with 0
// console.log(mirrorDistance(10));    // 10 → 01 → 1 → distance = 9
// console.log(mirrorDistance(100));   // 100 → 001 → 1 → 99
// console.log(mirrorDistance(120));   // 120 → 021 → 21 → 99
// console.log(mirrorDistance(500));   // 500 → 005 → 5 → 495  

// Reverse pairs
// console.log(mirrorDistance(12));   // 21 → 9
// console.log(mirrorDistance(21));   // 12 → 9
// console.log(mirrorDistance(123));  // 321-123 → 198
// console.log(mirrorDistance(321));  // 123-321 → 198

// Large Numbers
// console.log(mirrorDistance(100000));     // 1 → 99999
// console.log(mirrorDistance(999999));     // palindrome → 0
// console.log(mirrorDistance(123456789));  // big diff
// console.log(mirrorDistance(100000001));  // palindrome → 0

// Deep Patterns
// Palindrome → always 0
// Trailing zeros → large distance
// Reversed pairs → same result
// Symmetric sequences → equal differences
// Difference grows with digit imbalance