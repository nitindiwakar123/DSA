function calculateSum(n, k) {
    let sum = n
    while (n > 0) {
        const res = Math.floor(n / k);
        const rem = n % k;

        console.log({ n, sum, res: Math.floor(n / k) });
        if (rem != 0) {
            n = res + rem;
        } else {
            n = Math.floor(n / k);
        }
        sum += res;
    }
    return sum;
}

console.log(calculateSum(15, 3));
