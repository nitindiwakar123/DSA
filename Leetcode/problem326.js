// function powerOfThree(n) {
//     if (n == 1) return true;

//     if (n > 0 && n % 3 == 0) {
//         while (n > 1) {
//             n = n / 3;
//         }
//         return n == 1;
//     }

//     return false;
// }

// Clean Aproach - 1
// function powerOfThree(n) {
//     if(n <= 0) return false;
//     while (n > 1) {
//         if ((n % 3 )!= 0) return false;
//         n = n / 3;
//     }
//     return true;
// }

// Clean Aproach - 2 - Not Recommended
// function powerOfThree(n) {
//     while (n > 1) {
//         n = n / 3;
//     }
//     return n==1;
// }

// Test Cases
console.log(powerOfThree(6));
console.log(powerOfThree(-1));
console.log(powerOfThree(0));
console.log(powerOfThree(27));
console.log(powerOfThree(81));
console.log(powerOfThree(243));
// console.log(powerOfThree(59049));
// console.log(powerOfThree(21));
// console.log(powerOfThree(15));
// console.log(powerOfThree(18));
// console.log(powerOfThree(1));
// console.log(powerOfThree(10));
// console.log(powerOfThree(45));
// console.log(powerOfThree(-27));
// console.log(powerOfThree(1162261467));
// console.log(powerOfThree(1162261468));