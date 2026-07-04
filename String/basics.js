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

    for (let i = 0; i<s.length; i++) {
        const evenLength = expandAroundCentre(s, i, i+1);
        const oddLength = expandAroundCentre(s, i, i);
        maxLength = Math.max(maxLength, Math.max(evenLength, oddLength));
    }

    return maxLength;
}

// count total palindromic substring
function expandAroundCentre(s, start, end) {
    let count = 0;
    while (start >= 0 && end<s.length && s.charAt(start) == s.charAt(end)) {
        console.log(s.slice(start, end+1));
        
        start--;
        end++;
        count++;
    }

    return count;
}

function totalPalindromicSubstring(s) {
    let total = 0;

    for (let i = 0; i<s.length; i++) {
        total += expandAroundCentre(s, i, i+1) + expandAroundCentre(s, i, i);
    }

    return total;
}

// console.log(totalPalindromicSubstring("aaa"));


// Largest substring with unique characters
// print/get the largest substring with unique characters
// check one string is substring of other or not