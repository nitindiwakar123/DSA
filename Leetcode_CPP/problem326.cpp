#include <iostream>
#include <stdio.h>
using namespace std;

// brute
bool isPowerOfThree(int n)
{
    if (n <= 0)
        return false;

    while (n > 1)
    {
        if ((n % 3) != 0)
            return false;
        n = n / 3;
    }

    return true;
}

int main()
{
    bool res = isPowerOfThree(15);
    cout << res << endl;
    return 0;
}