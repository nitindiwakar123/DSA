function decimalToBaseK(n, k) {
    let mul = 1;
    let res = 0;
    while (n>0) {
        res = (n%k)*mul+res;
        mul *= 10;
        n = Math.floor(n/k);
    }
    return res;
}

function sumBase(n, k) {
    let res = decimalToBaseK(n, k);
    let sum = 0;
    while (res>0) {
        sum += res%10;
        res = Math.floor(res/10);
    }
    return sum;
}

// Test Cases

// console.log(sumBase(0, 5));
// console.log(sumBase(0, 6));
// console.log(sumBase(0, 7));

// console.log(sumBase(1, 5));
// console.log(sumBase(1, 6));
// console.log(sumBase(1, 7));

// console.log(sumBase(9, 5));
// console.log(sumBase(9, 6));
// console.log(sumBase(9, 7));
// console.log(sumBase(9, 16));

// console.log(sumBase(120, 5));
// console.log(sumBase(120, 6));
// console.log(sumBase(120, 7));

// When number and base is same
// console.log(sumBase(5, 5));
// console.log(sumBase(6, 6));
// console.log(sumBase(7, 7));
// console.log(sumBase(17, 17));

// console.log(sumBase(120, 5));
// console.log(sumBase(120, 5));
// console.log(sumBase(34, 6));
