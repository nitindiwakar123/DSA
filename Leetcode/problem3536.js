function maxProduct(n) {
    let maxProduct = 0;

    while (n > 0) {
        const last = n % 10;
        let num = Math.floor(n / 10);
        while (num > 0) {
            const current = num % 10;
            const product = last * current;
            if (product > maxProduct) maxProduct = product;
            num = Math.floor(num / 10)
        }
        n = Math.floor(n / 10);
    }

    return maxProduct;
}

// Test Cases
// console.log(maxProduct(0));
// console.log(maxProduct(1));
// console.log(maxProduct(9));
// console.log(maxProduct(5)); // 0

// console.log(maxProduct(23)); // 6
// console.log(maxProduct(90)); // 0

// console.log(maxProduct(10));
// console.log(maxProduct(100));
// console.log(maxProduct(101));
// console.log(maxProduct(15500));
// console.log(maxProduct(1770));

// console.log(maxProduct(9369));

// console.log(maxProduct(105)); // 5 (1*5)
// console.log(maxProduct(1000)); // 0

// console.log(maxProduct(777)); // 49
// console.log(maxProduct(9999)); // 81

// console.log(maxProduct(123456)); // 30 (6*5)

// console.log(maxProduct(987654)); // 72 (9*8)