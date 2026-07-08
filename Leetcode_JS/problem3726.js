// function removeZeroes(n) {
//     let num = 0;
//     while (n>0) {
//         if((n%10)!=0) num = num * 10 + (n%10);
//         n = Math.floor(n/10);
//     }
//     return num;
// }

// function remove(n) {
//     const res = removeZeroes(n);
//     return removeZeroes(res);
// }

// way 2
function removeZeroes(n) {
    let res = 0;
    let mul = 1;

    while (n>0) {
        let digit = n%10;
        if(digit != 0) {
            res = digit*mul+res;
            mul *= 10;
        }
        n = Math.floor(n/10);
    }
    return res;
}

// Test Cases

// Single Numbers
// console.log(remove(0)); 
// console.log(remove(1)); 
// console.log(remove(9)); 

// Palindrome Numbers
// console.log(remove(11)); 
// console.log(remove(22)); 
// console.log(remove(343)); 
// console.log(remove(303)); 
// console.log(remove(101)); 
// console.log(removeZeroes(3030023)); 

// Trainling Zeroes
// console.log(remove(1100)); 
// console.log(remove(15000)); 
// console.log(remove(1745000));

