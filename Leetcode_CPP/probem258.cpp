#include <iostream>
#include <stdio.h>
using namespace std;

int sumOfDigits(int n)
{
    int sum = 0;
    while (n > 0)
    {
        sum += (n % 10);
        n = n / 10;
    }

    return sum;
}

int addDigits(int num)
{
    while (num > 9)
    {
        num = sumOfDigits(num);
    }
    
    return num;
}

int main()
{

    return 0;
}