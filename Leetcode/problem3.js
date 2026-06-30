// brute
// time - O(n^2)
// space - O(256)
// It will not run on leetcode due to O(n^2) time complexity
function lengthOfLongestSubstring(s) {
    const n = s.length;
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        let sub = "";
        const freq = new Array(255).fill(0);
        for (let j = i; j < n; j++) {
            if (freq[s.charCodeAt(j)] != 0) break;
            sub += s[j];
            maxLength = Math.max(maxLength, j - i + 1);
            freq[s.charCodeAt(j)] = 1;
        } 
    }

    return maxLength;
}

// better
// time - O(n+k)
// space - O(1)
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

// optimal - with hashing
// time - O(n)
// space - Object(256)
function lengthOfLongestSubstring(s) {
    const n = s.length;
    const hash = new Array(255).fill(-1);

    let maxLength = 0;
    let l = 0;
    let r = 0;

    while (r < n) {
        if (hash[s.charCodeAt(r)] >= l && hash[s.charCodeAt(r)] != -1) {
            l = hash[s.charCodeAt(r)] + 1;
        }

        maxLength = Math.max(maxLength, r - l + 1);

        hash[s.charCodeAt(r)] = r;
        r++;
    }

    return maxLength;
}

// Test Cases
// console.log(lengthOfLongestSubstring("abcabcdebb")); //5
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
