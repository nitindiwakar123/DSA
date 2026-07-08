// Solution 1 - not optimized
// function isValidPalindrome(s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     let str = "";
//     for (let i = s.length-1; i >= 0; i--) {
//        const char = s[i];
//        str += char;
//     }
//     return str==s;
// }

// Solution 2
function cleanStr(s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) str += s[i];
    }
    return str;
}

function isValidPalindrome(s) {
    s = s.toLowerCase();
    console.log(s);
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        
        if (s[start] !== s[end]) {
            const charCode = s.charCodeAt(start);
            if (charCode >= 97 && charCode <= 122){
                end--;
            } else {
                start++;
            };
        };
        console.log({start: s[start], end: s[end]});

        start++;
        end--;

    }
    return true;
}

console.log(isValidPalindrome("0P"));
// console.log(isValidPalindrome("mango"));
// console.log(isValidPalindrome("madam"));
// console.log(isValidPalindrome(""));