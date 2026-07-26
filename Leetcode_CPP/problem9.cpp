#include <iostream>
#include <stdio.h>
using namespace std;

// when you have to return false if number is negative
// bool isPalindrome(int x)
// {
//     long rev = 0;
//     long num = x;
//     while (x > 0)
//     {
//         rev = rev * 10 + (x % 10);
//         x = x / 10;
//     }
//     return rev == num;
// }


// when you have ignore sign. if number is palindrome
bool isPalindrome(int x)
{
    if (x < 0)
        x = -x;
    long rev = 0;
    long num = x;
    while (x > 0)
    {
        rev = rev * 10 + (x % 10);
        x = x / 10;
    }
    return rev == num;
}

int main()
{
    bool res = isPalindrome(-121);
    cout << res << endl;
    return 0;
}