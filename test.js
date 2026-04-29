function kthFactor(n, k) {
    let i = 1;
    let count = 0;
    while (i<=n) {
        if((n%i) == 0) {
            count++;
            if(count==k) return i;
        }
        i++;
    }
    return -1;
}

console.log(kthFactor(12, 5));
