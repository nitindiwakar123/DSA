// brute
function isPalindrome(x) {
    let rev = 0;
    const num = x;

    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return num === rev;
}

// better
function isPalindrome(x) {
    if (x < 0) return false;
    let rev = 0;
    const num = x;

    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return num === rev;
}

// Test Cases
// console.log(isPalindrome(0));
// console.log(isPalindrome(-0));
// console.log(isPalindrome(1));
// console.log(isPalindrome(-1));
// console.log(isPalindrome(11));
// console.log(isPalindrome(-11));

// Single Numbers
// console.log(isPalindrome(3));
// console.log(isPalindrome(5));
// console.log(isPalindrome(8));
// console.log(isPalindrome(9));
// console.log(isPalindrome(6));

// Pattern - every single number is a valid palindrome

// Numbers with same repeating digits
// console.log(isPalindrome(333));
// console.log(isPalindrome(555));
// console.log(isPalindrome(777));
// console.log(isPalindrome(1111));
// console.log(isPalindrome(4444));

// Pattern - every Number with same repeating digits is always a valid palindrome

// Numbers with Zeros
// console.log(isPalindrome(300));
// console.log(isPalindrome(101));
// console.log(isPalindrome(10001));
// console.log(isPalindrome(10000));

// console.log(isPalindrome(1013));
// Mixed Numbers
// console.log(isPalindrome(112244));
// console.log(isPalindrome(343434));
// console.log(isPalindrome(667733));
// console.log(isPalindrome(221122));
// console.log(isPalindrome(112211));

// Large Numbers
// console.log(isPalindrome(100000)); // false
// console.log(isPalindrome(999999)); // true
// console.log(isPalindrome(123456789)); // false
// console.log(isPalindrome(100000001)); // true

// Negative Numbers
// console.log(isPalindrome(-99)); // false
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(-343)); // false
// console.log(isPalindrome(-5)); // false
// console.log(isPalindrome(-757)); // false

// Pattern - Negative Numbers are always not a valid palindrome

// Extreme Edge Cases
// console.log(isPalindrome(Number.MAX_SAFE_INTEGER)); // false
// console.log(isPalindrome(9007199254740991)); // JS max safe int - false
// console.log(isPalindrome(1000000000000000000)); // large with trailing zeros → false
// console.log(isPalindrome(100000000000001)); // true

// Zero Edge Cases
// console.log(isPalindrome(0));    // true
// console.log(isPalindrome(00));   // true
// console.log(isPalindrome(000));  // true

// Near-Palindrome Cases
// console.log(isPalindrome(1223));   // false
// console.log(isPalindrome(123421)); // false
// console.log(isPalindrome(123451)); // false
// console.log(isPalindrome(100021)); // false