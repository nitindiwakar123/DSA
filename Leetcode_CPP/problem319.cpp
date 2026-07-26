#include <iostream>
#include <stdio.h>
using namespace std;

int bulbSwitch(int n)
{
    int i = 1;
    while (i * i <= n)
        i++;

    return i - 1;
}

int main()
{
    return 0;
}