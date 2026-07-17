// optimal
// time - O(n)
// space - O(7)
function romanToInt(s) {
    const n = s.length;
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let ans = 0;

    for (let i = 0; i < n-1; i++) {
        if (map[s[i]] < map[s[i + 1]])
            ans -= map[s[i]];
        else
            ans += map[s[i]];
    }

    ans += map[s[n-1]];

    return ans;
}

// Test Cases
// console.log(romanToInt("MCMXCIV"));
// console.log(romanToInt("I")); // 1
// console.log(romanToInt("V")); // 5
// console.log(romanToInt("X")); // 10
// console.log(romanToInt("L")); // 50
// console.log(romanToInt("C")); // 100
// console.log(romanToInt("D")); // 500
// console.log(romanToInt("M")); // 1000

// Additive cases
// console.log(romanToInt("II")); // 2
// console.log(romanToInt("III")); // 3
// console.log(romanToInt("VI")); // 6
// console.log(romanToInt("VIII")); // 8
// console.log(romanToInt("XV")); // 15
// console.log(romanToInt("XXVII")); // 27
// console.log(romanToInt("CL")); // 150
// console.log(romanToInt("MDCLXVI")); // 1666

// Subtractive cases
// console.log(romanToInt("IV")); // 4
// console.log(romanToInt("IX")); // 9
// console.log(romanToInt("XL")); // 40
// console.log(romanToInt("XC")); // 90
// console.log(romanToInt("CD")); // 400
// console.log(romanToInt("CM")); // 900

// Mixed cases
// console.log(romanToInt("XIV")); // 14
// console.log(romanToInt("XIX")); // 19
// console.log(romanToInt("XXIV")); // 24
// console.log(romanToInt("XLIV")); // 44
// console.log(romanToInt("XLIX")); // 49
// console.log(romanToInt("XCIX")); // 99
// console.log(romanToInt("CDXLIV")); // 444
// console.log(romanToInt("CMXCIX")); // 999

// // Official examples
// console.log(romanToInt("III")); // 3
// console.log(romanToInt("LVIII")); // 58
// console.log(romanToInt("MCMXCIV")); // 1994

// // Larger valid numbers
// console.log(romanToInt("MMXXIV")); // 2024
// console.log(romanToInt("MMCDXLII")); // 2442
// console.log(romanToInt("MMMDCCCLXXXVIII")); // 3888
// console.log(romanToInt("MMMCMXCIX")); // 3999

// // Consecutive subtractive patterns
// console.log(romanToInt("XCIV")); // 94
// console.log(romanToInt("CXLIX")); // 149
// console.log(romanToInt("MCDXCII")); // 1492
// console.log(romanToInt("MCMLXXXIV")); // 1984
// console.log(romanToInt("MMCMXCIX")); // 2999