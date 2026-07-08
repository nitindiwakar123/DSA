// reverse string while preserving space
function reverse(s) {
    const res = [];
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        while (s[start] == " ") res[start++] = " ";

        while (s[end] == " ") res[end--] = " ";


        res[start] = s.charAt(end);
        res[end] = s.charAt(start);
        start++;
        end--;
    }

    return res.join("");
}

// console.log(reverse("I  love   running"));

// largestPalindromicSubstring
// function expandAroundCentre(s, start, end) {
//     while (start >= 0 && end<s.length && s.charAt(start) == s.charAt(end)) {
//         start--;
//         end++;
//     }

//     return end-start-1;
// }

function largestPalindromicSubstring(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const evenLength = expandAroundCentre(s, i, i + 1);
        const oddLength = expandAroundCentre(s, i, i);
        maxLength = Math.max(maxLength, Math.max(evenLength, oddLength));
    }

    return maxLength;
}

// count total palindromic substring
// function expandAroundCentre(s, start, end) {
//     let count = 0;
//     while (start >= 0 && end < s.length && s.charAt(start) == s.charAt(end)) {
//         start--;
//         end++;
//         count++;
//     }

//     return count;
// }

function totalPalindromicSubstring(s) {
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        total += expandAroundCentre(s, i, i + 1) + expandAroundCentre(s, i, i);
    }

    return total;
}

// console.log(totalPalindromicSubstring("aaa"));

function expandAroundCentre(s, start, end) {
    while (start >= 0 && end < s.length && s.charAt(start) == s.charAt(end)) {
        start--;
        end++;
    }

    return end - start - 1;
}

function longestPalindromicSubstring(s) {
    const n = s.length;
    let maxLength = 0;
    let start = 0;
    let end = 0;

    for (let i = 0; i < n; i++) {

        const evenSize = expandAroundCentre(s, i, i + 1);
        const oddSize = expandAroundCentre(s, i, i);

        const tempMaxLength = Math.max(evenSize, oddSize);
        if (tempMaxLength > maxLength) {
            maxLength = tempMaxLength;
            start = i - Math.floor((tempMaxLength - 1) / 2);
            end = i + Math.floor(tempMaxLength / 2);
        }

    }
    return s.slice(start, end + 1);
}

console.log(longestPalindromicSubstring("acpqxqpbd"));

// Largest substring with unique characters
// print/get the largest substring with unique characters
// check one string is substring of other or not