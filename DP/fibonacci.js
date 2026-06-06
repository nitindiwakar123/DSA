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
// console.log(getNthFibonacci(6));

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

// Tabulation approach most faster but its harder to implement and memory heavy.


// Fibonacci with Memoization and recursion (Top Down DP)
function getFibonacci(n) {
    const dp = new Array(n + 1).fill(-1);
    return fib(dp, n);
}

function fib(dp, n) {
    if (n == 0 || n == 1)
        return n;
    else if (dp[n] != -1)
        return dp[n]

    return dp[n] = fib(dp, n - 1) + fib(dp, n - 2);
}
// console.log(getFibonacci(8));


// house robber
// function robProfit(nums) {
//     if(nums.length == 1)
//         return nums[0];

//     const dp = 
// }


// function minCost(cost) {
//     const n = cost.length;
//     const dp = new Array(n);
//     dp[0] = cost[0];
//     dp[1] = cost[1];

//     for (let i = 2; i < n; i++) {
        
//     }
// }

