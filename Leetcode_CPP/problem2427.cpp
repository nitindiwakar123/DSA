#include <iostream>
#include <stdio.h>
using namespace std;

// brute
int commonFactors(int a, int b)
{
    int smallest = (a > b) ? b : a;
    int biggest = (a > b) ? a : b;
    int count = 0;

    for (int i = 1; i <= smallest / 2; i++)
    {
        if (a % i == 0 && b % i == 0)
            count++;
    }

    if (biggest % smallest == 0)
        count++;

    return count;
}

// optimal
int HCF(int a, int b)
{
    int divident = (a > b) ? a : b;
    int divisor = (a > b) ? b : a;

    while (divisor > 0)
    {
        int rem = divident % divisor;
        divident = divisor;
        divisor = rem;
    }

    return divident;
}

int commonFactors(int a, int b)
{
    int hcf = HCF(a, b);
    int count = 0;

    for (int i = 1; i * i <= hcf; i++)
    {
        if (hcf % i == 0)
        {
            if (i * i == hcf)
                count += 1;
            else
                count += 2;
        }
    }

    return count;
}

int main()
{

    return 0;
}