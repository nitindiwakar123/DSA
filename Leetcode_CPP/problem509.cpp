#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

// int fib(int n)
// {
//     if (n == 0)
//         return 0;
//     else if (n == 1)
//         return 1;

//     return fib(n - 1) + fib(n - 2);
// }

// int fib(vector<int> &dp, int n)
// {
//     if (n == 0)
//         return 0;
//     else if (n == 1)
//         return 1;
//     else if (dp[n])
//         return dp[n];

//     return dp[n] = fib(dp, n - 1) + fib(dp, n - 2);
// }

// int getNthFib(int n)
// {
//     vector<int> dp(n+1, -1);

//     return fib(dp, n);
// }

// int fib(int n)
// {
//     if (n == 0 || n == 1)
//         return n;
//     vector<int> dp(n + 1, -1);
//     dp[0] = 0;
//     dp[1] = 1;
//     for (int i = 2; i <= n; i++)
//     {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     return dp[n];
// }

int fib(int n)
{
    if (n == 0 || n == 1)
        return n;
    
    int a = 0;
    int b = 1;
    for (int i = 2; i <= n; i++)
    {
        int current = a + b;
        a = b;
        b = current;
    }

    return b;
}

int main()
{

    return 0;
}