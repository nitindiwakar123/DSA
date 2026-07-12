// 28. Find the Index of the First Occurrence in a String

// brute
// time - O(n+m)
// space - O(1)
function strStr(haystack, needle) {
    let i = 0;
    for (let j = 0; j < haystack.length; j++) {
        if (haystack[j] == needle[i]) {
            let k = j;

            while (i < needle.length) {
                if(haystack[k] != needle[i]) break;
                k++;
                i++;
            }

            if (i == needle.length) {
                return j;
            } else {
                i = 0;
            }
        }

    }

    return -1;
}

// Test Cases 
// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("sadbutsad", "but")); // 3
// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("leetcode", "leeto")); // -1

// // // Match at beginning
// console.log(strStr("hello", "he")); // 0

// // Match at end
// console.log(strStr("hello", "lo")); // 3

// // Match in middle
// console.log(strStr("hello", "ell")); // 1

// // Entire string matches
// console.log(strStr("abc", "abc")); // 0

// // Needle longer than haystack
// console.log(strStr("abc", "abcd")); // -1

// // Single character found
// console.log(strStr("a", "a")); // 0

// // Single character not found
// console.log(strStr("a", "b")); // -1

// // Repeated characters
// console.log(strStr("aaaaa", "aa")); // 0

// // Overlapping match
// console.log(strStr("mississippi", "issi")); // 1

// // Multiple possible matches
// console.log(strStr("abababab", "abab")); // 0

// // Match after repeated prefix
// console.log(strStr("aaaab", "aab")); // 2

// // No occurrence
// console.log(strStr("abcdef", "gh")); // -1

// // Needle at last possible position
// console.log(strStr("abcdef", "ef")); // 4

// // Haystack and needle both length 1
// console.log(strStr("z", "z")); // 0

// // Different single characters
// console.log(strStr("z", "a")); // -1

// // Consecutive repeated pattern
// console.log(strStr("abababc", "ababc")); // 2

// // Long repeated characters
// console.log(strStr("aaaaaaaaaa", "aaaa")); // 0

// // Partial prefix but no full match
// console.log(strStr("aaaabaaaab", "aaaba")); // 1

// // Match after many repeated chars
// console.log(strStr("bbbbbbbbbc", "bbc")); // 7

// // Empty haystack
// console.log(strStr("", "a")); // -1

// // Both empty (LeetCode expects 0)
// console.log(strStr("", "")); // 0

// // Empty needle (LeetCode expects 0)
// console.log(strStr("abc", "")); // 0

// // Case sensitivity
// console.log(strStr("Hello", "hello")); // -1

// // Special characters
// console.log(strStr("abc$def", "$d")); // 3

// // Spaces
// console.log(strStr("find the index", "the")); // 5

// // Numbers as characters
// console.log(strStr("1234512345", "345")); // 2