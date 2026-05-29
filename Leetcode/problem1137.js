// N-th Tribonacci Number
// Recommended to use iterable approach
function getNthTribonacci(n) {
    if (n == 0)
        return 0;
    else if (n == 1 || n == 2)
        return 1;

    let a = 0;
    let b = 1;
    let c = 1;
    let current = 0;
    for (let i = 3; i <= n; i++) {
        current = a + b + c;
        a = b;
        b = c;
        c = current;
    }
    return current;
}

function tribonacci(n) {
    if (n == 0)
        return 0;
    else if (n == 1 || n == 2)
        return 1;
    else 
        return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);

}

// console.log(tribonacci(10));

// Test Cases
// console.log(getNthTribonacci(0));
// console.log(getNthTribonacci(1));
// console.log(getNthTribonacci(2));
// console.log(getNthTribonacci(3));
// console.log(getNthTribonacci(4));
// console.log(getNthTribonacci(5));
// console.log(getNthTribonacci(6));
// console.log(getNthTribonacci(7));
// console.log(getNthTribonacci(8));
// console.log(getNthTribonacci(9));
// console.log(getNthTribonacci(10));
// console.log(getNthTribonacci(11));
// console.log(getNthTribonacci(12));
// console.log(getNthTribonacci(13));
// console.log(getNthTribonacci(14));
// console.log(getNthTribonacci(15));
// console.log(getNthTribonacci(16));
// console.log(getNthTribonacci(17));
// console.log(getNthTribonacci(18));
// console.log(getNthTribonacci(19));
// console.log(getNthTribonacci(20));
// console.log(getNthTribonacci(21));
// console.log(getNthTribonacci(22));
// console.log(getNthTribonacci(23));
// console.log(getNthTribonacci(24));
// console.log(getNthTribonacci(25));
// console.log(getNthTribonacci(26));
// console.log(getNthTribonacci(27));
// console.log(getNthTribonacci(28));
// console.log(getNthTribonacci(29));
// console.log(getNthTribonacci(30));
// console.log(getNthTribonacci(31));
// console.log(getNthTribonacci(32));
// console.log(getNthTribonacci(33));
// console.log(getNthTribonacci(34));
// console.log(getNthTribonacci(35));
// console.log(getNthTribonacci(36));

