function rotateLeft(s) {
    const n = s.length;
    const char = s[0];

    for (let i = 1; i < n; i++) {
        s[i - 1] = s[i];
    }

    s[n - 1] = char;
}

function rotateString(s, goal) {
    if (s.length != goal.length)
        return false;

    const str = s.split("");

    while (true) {
        rotateLeft(str);

        const res = str.join("");
        if (res == goal)
            return true;
        else if (res == s)
            return false;
    }
}

// Test Cases
// console.log(rotateString("abcde", "cdeab")); // true
// console.log(rotateString("abcde", "abced")); // false

// Same strings
// console.log(rotateString("a", "a")); // true
// console.log(rotateString("", "")); // true
// console.log(rotateString("aaaa", "aaaa")); // true

// // Single character
// console.log(rotateString("a", "b")); // false

// // Different lengths
// console.log(rotateString("abc", "ab")); // false
// console.log(rotateString("ab", "abc")); // false

// // One rotation
// console.log(rotateString("abc", "bca")); // true
// console.log(rotateString("abc", "cab")); // true

// // Full rotation
// console.log(rotateString("abc", "abc")); // true

// // Impossible rotation
// console.log(rotateString("abc", "acb")); // false
// console.log(rotateString("abcd", "dacb")); // false

// // Repeated characters
// console.log(rotateString("aaab", "abaa")); // true
// console.log(rotateString("aaab", "baaa")); // true
// console.log(rotateString("aaab", "aaba")); // true
// console.log(rotateString("aaab", "abaa")); // true

// // All same characters
// console.log(rotateString("zzzz", "zzzz")); // true

// // Rotation with repeated pattern
// console.log(rotateString("abab", "baba")); // true
// console.log(rotateString("abab", "abba")); // false

// // Longer strings
// console.log(rotateString("rotation", "tionrota")); // true
// console.log(rotateString("rotation", "rotatoin")); // false

// // Nearly correct but not a rotation
// console.log(rotateString("waterbottle", "erbottlewat")); // true
// console.log(rotateString("waterbottle", "erbottlewta")); // false

// // Two-character cases
// console.log(rotateString("ab", "ba")); // true
// console.log(rotateString("ab", "aa")); // false

// // Case sensitivity
// console.log(rotateString("Abc", "bcA")); // true
// console.log(rotateString("Abc", "Bca")); // false

// // Numeric characters
// console.log(rotateString("12345", "45123")); // true
// console.log(rotateString("12345", "45231")); // false
