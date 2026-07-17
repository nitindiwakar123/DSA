// brute 
// time - O(1)
// space - O(1)
// function intToRoman(num) {
//     const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
//     const integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     let ans = "";
//     let i = 0;

//     while (i < roman.length && num > 0) {
//         while (num >= integer[i]) {
//             num -= integer[i];
//             ans += roman[i];
//         }
//         i++;
//     }

//     return ans;
// }

// optimal 
// time - O(1)
// space - O(1)
function int(num) {
    return Math.floor(num);
}

function intToRoman(num) {
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hrns = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const ths = ['', 'M', 'MM', 'MMM'];

    return ths[int(num / 1000)] + hrns[int(num / 100) % 10] + tens[int(num / 10) % 10] + ones[num % 10];
}       

// Test Cases
console.log(intToRoman(3749));
