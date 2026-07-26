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
        // calculate the full bottles from total empty bottles which are numBottles/numExchange
        int fullB = numBottles / numExchange;
        count += fullB;

        // next numBottles(emptyBottles) will be remaining empty bottles + full Bottles
        numBottles = (numBottles%numExchange) + fullB;
    }
    
    return count;
}

int main()
{
    int res = numWaterBottles(12, 4);
    cout<<res<<endl;
    return 0;
}