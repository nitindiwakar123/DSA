// function is4sPower(n){
//     while (n > 1) {
//         n = n / 4;
//     }   
//     return n==1;
// };

// More optimized aproach
// function is4sPower(n) {
//     if(n<=0) return false;
//     while (n > 1) {
//         if((n%4) != 0) return false;
//         n = n / 4;
//     }
//     return true;
// }

function is4sPower(n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Test Cases
// console.log(is4sPower(-1));
// console.log(is4sPower(0));
// console.log(is4sPower(1));
// console.log(is4sPower(2));
// console.log(is4sPower(4));
// console.log(is4sPower(8));
// console.log(is4sPower(16));
// console.log(is4sPower(32));
// console.log(is4sPower(18));
// console.log(is4sPower(32));
// console.log(is4sPower(7));
// console.log(is4sPower(20));
// console.log(is4sPower(64));
// console.log(is4sPower(256));
