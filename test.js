console.time();
function getKthFactor(n, k) {
    if (k > n) return -1;
    let position = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            position++;
            if (position == k) {
                return i;
            }
        }
    }
    position++;
    if (position == k) return n;
    
    return -1;
}

console.log(getKthFactor(42, 8));
console.timeEnd();
