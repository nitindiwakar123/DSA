function is4sPower(n) {
    while (n > 1) {
        n = n / 4;
    }
    return n==1;
}

console.log(is4sPower(16));
