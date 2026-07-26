#include <iostream>
#include <stdio.h>
#include <cmath>
using namespace std;

// time - O(log n)
// space - O(1)
int numWaterBottles(int numBottles, int numExchange)
{
    // initially numBottles will be drunked
    int count = numBottles;

    while (numBottles >= numExchange)
    {
        count += 1;
        numBottles = numBottles - numExchange + 1;
        numExchange++;
    }

    return count;
}

int main()
{
    int res = numWaterBottles(10, 3);
    cout << res << endl;
    return 0;
}