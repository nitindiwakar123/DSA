function climbStairs(n) {
    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        const current = a + b;
        a = b;
        b = current;
    }

    return b;
}

console.log(climbStairs(8));