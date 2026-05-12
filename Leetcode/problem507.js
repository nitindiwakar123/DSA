// 507. Perfect Number

// a number is a perfect number if n is equal to sum of divisors of n excluding itself(n);
// function checkPerfectNumber(num) {
//     let sum = 0
//     for (let i = 1; i <= num/2; i++) {
//         if(num%i == 0) {            
//             sum += i;
//         }
//     }        
//     return sum == num;
// }

// Most optimized
function checkPerfectNumber(num) {
    let sum = 1
    for (let i = 2; i*i <= num; i++) {
        if(num%i == 0) {
            sum += i;            
            const secondFactor = num/i;
            if(secondFactor != i) {
                sum += secondFactor;
            }
        }
    }        
    return (num<2)? false: sum == num;
}

// Test Cases
// console.log(checkPerfectNumber(0));
// console.log(checkPerfectNumber(1));
// console.log(checkPerfectNumber(9));

// console.log(checkPerfectNumber(12));
// console.log(checkPerfectNumber(36));


// console.log(checkPerfectNumber(10));
// console.log(checkPerfectNumber(20));
// console.log(checkPerfectNumber(100));
// console.log(checkPerfectNumber(200));
// console.log(checkPerfectNumber(1000));

// prime numbers 
// console.log(checkPerfectNumber(2));
// console.log(checkPerfectNumber(11));
// console.log(checkPerfectNumber(13));
// console.log(checkPerfectNumber(17));
// console.log(checkPerfectNumber(101));

// Pattern: there are no prime numbers that are also perfect numbers

// Perfect Squares
// console.log(checkPerfectNumber(4));
// console.log(checkPerfectNumber(16));
// console.log(checkPerfectNumber(25));
// console.log(checkPerfectNumber(36));
// console.log(checkPerfectNumber(81));

console.log(checkPerfectNumber(6));
console.log(checkPerfectNumber(28));
