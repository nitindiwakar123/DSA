function isValidPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let str = "";
    for (let i = s.length-1; i >= 0; i--) {
       const char = s[i];
       str += char;
    }
    return str==s;
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
console.log(isValidPalindrome("mango"));
console.log(isValidPalindrome("madam"));
console.log(isValidPalindrome(""));