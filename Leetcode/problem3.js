// brute
function lengthOfLongestSubstring(s) {
    const n = s.length;
    let left = 0;
    let right = 0;
    let maxLen = 0;

    while (right < n) {
        maxLen = Math.max(maxLen, right - left + 1);

        for (let i = right; i >= left; i--) {
            if (right < n - 1 && s[right + 1] == s[i])
                left = i + 1;
        }
        right++;
    }

    return maxLen;
}

// Test Cases
// console.log(lengthOfLongestSubstring("abcabcbb")); //3
// console.log(lengthOfLongestSubstring("bbbbb")); //1
// console.log(lengthOfLongestSubstring("pwwkew")); //3
// console.log(lengthOfLongestSubstring("")); //0
// console.log(lengthOfLongestSubstring("a")); //1
// console.log(lengthOfLongestSubstring("aa")); //1
// console.log(lengthOfLongestSubstring("ab")); //2
// console.log(lengthOfLongestSubstring("abba")); //2
// console.log(lengthOfLongestSubstring("abcdefga")); //7
// console.log(lengthOfLongestSubstring("!@#$%^")); //6
// console.log(lengthOfLongestSubstring("!!!")); //1
// console.log(lengthOfLongestSubstring(" ")); //1
// console.log(lengthOfLongestSubstring("  ")); //1
