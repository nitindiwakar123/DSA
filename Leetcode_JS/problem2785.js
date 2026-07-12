// brute (TLE)
// time - O(n^2)
// space - O(1)
// function sortVowels(s) {
//     const n = s.length;
//     s = s.split("");

//     for (let i = 0; i < n; i++) {
//         const c = s[i];
//         if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
//             for (let j = i + 1; j < n; j++) {
//                 if (!(s[j] == 'A' || s[j] == 'E' || s[j] == 'I' || s[j] == 'O' || s[j] == 'U' || s[j] == 'a' || s[j] == 'e' || s[j] == 'i' || s[j] == 'o' || s[j] == 'u')) continue;

//                 if (s[j] < s[i]) {
//                     const temp = s[i];
//                     s[i] = s[j];
//                     s[j] = temp;
//                 }
//             }
//         }
//     }

//     return s.join("");
// }

// time - O(4n) = O(n)
// space - O(26+26+n)
function sortVowels(s) {
    const n = s.length;
    if (n <= 1) return s;
    s = s.split("");
    const upper = new Array(26).fill(0);
    const lower = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            lower[c.charCodeAt(0) - 97]++;
            s[i] = '#';
        } else if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
            upper[c.charCodeAt(0) - 65]++;
            s[i] = '#';
        }
    }

    let temp = "";
    for (let i = 0; i < 26; i++) {
        while (upper[i]) {
            temp += String.fromCharCode(i + 65);
            upper[i]--;
        }
    }

    for (let i = 0; i < 26; i++) {
        while (lower[i]) {
            temp += String.fromCharCode(i + 97);
            lower[i]--;
        }
    }

    let i = 0;
    let j = 0;

    while (j < temp.length) {
        if(s[i] == '#') {
            s[i] = temp[j];
            j++;
        }
        i++;
    }

    return s.join("");
}


// Test Cases
// console.log(sortVowels("UpjPbEnOj"));

// console.log(sortVowels("aA")); // "Aa"

// console.log(sortVowels("lEetcOde")); // "lEOtcede"

// console.log(sortVowels("lYmpH")); // "lYmpH" (no vowels)

// console.log(sortVowels("aeiou")); // "aeiou"

// console.log(sortVowels("uoiea")); // "aeiou"

// console.log(sortVowels("AEIOU")); // "AEIOU"

// console.log(sortVowels("UOIEA")); // "AEIOU"


// console.log(sortVowels("Aa")); // "Aa"

// console.log(sortVowels("bAcdEfgI")); // "bAcdEfgI"

// console.log(sortVowels("bIcdAfgE")); // "bAcdEfgI"

// console.log(sortVowels("leetcode")); // "leetcedo"

// console.log(sortVowels("hello")); // "hello"

// console.log(sortVowels("hEllO")); // "hEllO"

// console.log(sortVowels("Programming")); // "Pragrimmong"

// console.log(sortVowels("aaaa")); // "aaaa"

// console.log(sortVowels("UUUU")); // "UUUU"

// console.log(sortVowels("aeiouAEIOU")); // "AEIOUaeiou"

// console.log(sortVowels("AEIOUaeiou")); // "AEIOUaeiou"

// console.log(sortVowels("z")); // "z"

// console.log(sortVowels("A")); // "A"

// console.log(sortVowels("u")); // "u"

// console.log(sortVowels("")); // ""

// console.log(sortVowels("BbCcDd")); // "BbCcDd"

// console.log(sortVowels("eEoOiIaAuU")); // "AEIOUaeiou"

// console.log(sortVowels("Mango")); // "Mango"

// console.log(sortVowels("Umbrella")); // "AmbrellU"

// console.log(sortVowels("Education")); // "Edacituon"

// console.log(sortVowels("xyzAEIOUxyz")); // "xyzAEIOUxyz"

// console.log(sortVowels("xyzUOIEAxyz")); // "xyzAEIOUxyz"

// console.log(sortVowels("a1e2i3o4u")); // "a1e2i3o4u"

// console.log(sortVowels("u1o2i3e4a")); // "a1e2i3o4u"