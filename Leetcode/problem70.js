// brute
// function climbStairs(n) {
//     let a = 1;
//     let b = 2;
//     for (let i = 3; i <= n; i++) {
//         const current = a + b;
//         a = b;
//         b = current;
//     }

//     return b;
// }

// recursion - causing time limit exceed error on leetcode!
// function ways(n) {
//     if (n == 1 || n == 2) {
//         return n;
//     }
//     return ways(n - 1) + ways(n - 2);
// }

// console.log(ways(8));

// dp Memoization approach

function climbStairs(n) {
    const dp = new Array(n + 1).fill(-1);

    return way(dp, n);
}

function way(dp, n) {

    if (n == 1 || n == 2) {
        return n;
    } else if (dp[n] != -1) {
        return dp[n];
    }

    return dp[n] = way(dp, n - 1) + way(dp, n - 2);
}

console.log(climbStairs(8));

// dp tabulation approach
function ways(n) {
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// console.log(ways(8));