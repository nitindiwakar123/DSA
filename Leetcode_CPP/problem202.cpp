#include <iostream>
#include <stdio.h>
#include <cmath>
using namespace std;

// brute
// bool isHappy(int n)
// {
//     while (n > 1)
//     {
//         long sum = 0;
//         while (n > 0)
//         {
//             sum += pow(n % 10, 2);
//             n /= 10;
//         }
//         if (sum == 4)
//             return false;
//         n = sum;
//     }
//     return true;
// }

// optimal
bool isHappy(int n)
{
    while (n > 9)
    {
        long sum = 0;
        while (n > 0)
        {
            sum += pow(n % 10, 2);
            n /= 10;
        }
        n = sum;
    }

    return n == 1 || n == 7;
}

int main()
{
    return 0;
}