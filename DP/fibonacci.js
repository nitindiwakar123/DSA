// brute force
function getNthFibonacci(n) {
    if (n == 0 || n == 1)
        return n;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const n = a + b;
        a = b;
        b = n;
    }

    return b;
}
// console.log(getNthFibonacci(70));

//fibonacci with recursion
function fibonacci(n) {
    if (n <= 1)
        return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(78));

// what's the problem? recursion is too slow because it has no memory

// Fibonacci with Tabulation
// (Bottom up DP)
function fibonacciWithDP(n) {
    if (n == 0 || n == 1)
        return n;

    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// fibonacciWithDP(50);

// Tabulation approach faster but its harder to implement and memory heavy.


// Fibonacci with Memoization and recursion (Top Down DP)
function getFibonacci(n) {
    const dp = new Array(n + 1).fill(-1);
    return fib(dp, n);
}

function fib(dp, n) {
    if (n == 0 || n == 1) {
        return n;
    } else if (dp[n] != -1) {
        return dp[n]
    }

    return dp[n] = fib(dp, n - 1) + fib(dp, n - 2);
}
// console.log(getFibonacci(8));


// Optimization chart(rank to most - worst)
// getNthFibonacci: Iterative two-variable method (O(n), O(1)) // most
// fibonacciWithDP: DP Tabulation (O(n), O(n))
// getFibonacci: DP Memoization (O(n), O(n))
// fibonacci: Plain Recursion (O(2ⁿ))