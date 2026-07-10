// brute
// time - O(n) + O(128) = O(n)
// space - O(128)
function longestPalindrome(s) {
    const hash = new Array(128).fill(0);
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i)]++;
    }

    let odd = false;
    for (let i = 0; i < hash.length; i++) {
        if (hash[i] > 0 && hash[i] % 2 == 0) {
            maxLength += hash[i];
        } else if (hash[i] % 2 != 0) {
            maxLength += hash[i] - 1;
            odd = true;
        }
    }

    return odd ? maxLength + 1 : maxLength;
}

// optimal
// time - O(n) + O(26+26)
// space - O(26+26)
function longestPalindrome(s) {
    const lower = new Array(26).fill(0);
    const upper = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'a') {
            lower[s.charCodeAt(i) - 97]++;
        } else {
            upper[s.charCodeAt(i) - 65]++;
        }
    }

    let maxLength = 0;
    let odd = false;
    for (let i = 0; i < 26; i++) {
        if (lower[i] % 2 == 0) {
            maxLength += lower[i];
        } else {
            maxLength += lower[i] - 1;
            odd = true;
        }

        if (upper[i] % 2 == 0) {
            maxLength += upper[i];
        } else {
            maxLength += upper[i] - 1;
            odd = true;
        }
    }

    return odd? maxLength+1: maxLength;
}

// // Test Cases
// console.log(longestPalindrome("abccccdd"));      // 7
// console.log(longestPalindrome("a"));             // 1
// console.log(longestPalindrome("bb"));            // 2

// // Single character
// console.log(longestPalindrome("z"));             // 1

// // All characters appear even times
// console.log(longestPalindrome("aabbcc"));        // 6

// // All characters appear odd times
// console.log(longestPalindrome("abc"));           // 1

// // One odd frequency
// console.log(longestPalindrome("aaab"));          // 3

// // Multiple odd frequencies
// console.log(longestPalindrome("aaabbb"));        // 5

// // All same character
// console.log(longestPalindrome("aaaaaa"));        // 6

// // Mixed uppercase and lowercase (case-sensitive)
// console.log(longestPalindrome("Aa"));            // 1

// // Uppercase and lowercase with pairs
// console.log(longestPalindrome("AaAa"));          // 4

// // Multiple pairs and one center
// console.log(longestPalindrome("aabbccd"));       // 7

// // Even and odd counts
// console.log(longestPalindrome("aaabbbb"));       // 7

// // No repeated characters
// console.log(longestPalindrome("abcdef"));        // 1

// // Long odd count
// console.log(longestPalindrome("aaaaab"));        // 5

// // Large even counts
// console.log(longestPalindrome("aaaabbbbcccc"));  // 12

// // Multiple odd counts
// console.log(longestPalindrome("aaaabbbbcccd"));  // 11

// // Empty string
// console.log(longestPalindrome(""));              // 0

// Complex case
// console.log(longestPalindrome("bananas"));       // 5

// Mixed frequencies
// console.log(longestPalindrome("cccdddeeefff"));  // 9

// // Large odd frequencies
// console.log(longestPalindrome("aaaaabbbbbccccc")); // 13