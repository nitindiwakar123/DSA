#include <iostream>
#include <stdio.h>
#include <cmath>
using namespace std;

int trailingZeroes(int n)
{
    int zeroes = 0;
    while (n>4)
    {
        n = n/5;
        zeroes += n;
    }
    
    return zeroes;
}

int main()
{
    trailingZeroes(43);
    return 0;
}